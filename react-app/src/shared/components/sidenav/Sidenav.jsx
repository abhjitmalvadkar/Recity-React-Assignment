import './Sidenav.css';
import {useLocation, useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';

export default function Sidenav() {
 
  const navigate = useNavigate();
  const location = useLocation();
  const [config, setConfig] = useState([
    {
      key: 'dashboard',
      label: 'Dashboard',
      link: '/dashboard',
      isExpandable: false,
      isSelected: false
    },
    {
      key: 'inventory',
      label: 'Inventory',
      isExpandable: true,
      isExpanded: false,
      children: [
        {
          key: 'inward',
          label: 'Inward',
          link: '/inventory/inward',
          isSelected: false
        },
        {
          key: 'outward',
          label: 'Outward',
          link: '/inventory/outward',
          isSelected: false
        }
      ]
    },
    {
      key: 'stakeholders',
      label: 'Stakeholders',
      isExpandable: true,
      isExpanded: false,
      children: [
        {
          key: 'vendors',
          label: 'Vendors',
          link: '/stakeholders/vendors',
          isSelected: false
        },
        {
          key: 'customers',
          label: 'Customers',
          link: '/stakeholders/customers',
          isSelected: false
        }
      ]
    },
    {
      key: 'processes',
      label: 'Processes',
      link: '/processes',
      isExpandable: false,
      isSelected: false
    },
    {
      key: 'materials',
      label: 'Materials',
      link: '/materials',
      isExpandable: false,
      isSelected: false
    },
    {
      key: 'vehicles',
      label: 'Vehicles',
      link: '/vehicles',
      isExpandable: false,
      isSelected: false
    },
    {
      key: 'staff',
      label: 'Staff',
      isExpandable: true,
      isExpanded: false,
      children: [
        {
          key: 'nested-staff',
          label: 'Staff',
          link: '/staff/info',
          isSelected: false
        },
        {
          key: 'attendance',
          label: 'Attendance',
          link: '/staff/attendance',
          isSelected: false
        }
      ]
    },
    {
      key: 'finances',
      label: 'Finances',
      isExpandable: true,
      isExpanded: false,
      children: [
        {
          key: 'expenses',
          label: 'Expenses',
          link: '/finances/expenses',
          isSelected: false
        },
        {
          key: 'revenue',
          label: 'Revenue',
          link: '/finances/revenue',
          isSelected: false
        }
      ]
    },
    {
      key: 'reports',
      label: 'Reports/Analytics',
      link: '/reports',
      isExpandable: false,
      isSelected: false
    },
    {
      key: 'settings',
      label: 'Settings',
      link: '/settings',
      isExpandable: false,
      isSelected: false
    }
  ]);
  
  useEffect(() => {
    selectSidenavItem(location.pathname)
  }, [location]);
  
  function navigateTo(url) {
    navigate(url);
  }
  
  function selectSidenavItem(url) {
    const newConfig = JSON.parse(JSON.stringify(config));
    
    newConfig.forEach(o => {
      if (!o.isExpandable) {
        o.isSelected = url === o.link;
      } else {
        let isExpanded = false;
        o.children?.forEach(co => {
          co.isSelected = url === co.link;
          if (!isExpanded) {
            isExpanded = !!co.link.includes(url);
          }
        });
        
        o.isExpanded = isExpanded;
      }
    });
    
    setConfig(newConfig);
  }
  
  return (
    <div className="sidenav-wrapper">
      <ul className="items-list">
        {
          config.map((o) => {
            if (o.isExpandable) {
              return (
                <li key={o.key}>
                  <button className="btn btn-toggle d-inline-flex align-items-center border-0 collapsed flex flex-row justify-content-between"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${o.key}`}
                          aria-expanded={o.isExpanded}>
                    {o.label}
                  </button>
                  <div
                    id={o.key}
                    className={`collapse ${o.isExpanded ? 'show' : ''} expandable-list`}
                  >
                    <ul className="btn-toggle-nav">
                      {
                        o.children.map(co => {
                          return (
                            <li
                              key={co.key}
                              onClick={() => navigateTo(co.link)}
                              className={`nested non-expandable-option ${co.isSelected ? 'selected' : ''}`}
                            >
                              {co.label}
                            </li>
                          );
                        })
                      }
                    </ul>
                  </div>
                </li>
              );
            } else {
              return (
                <li
                  key={o.key}
                  onClick={() => navigateTo(o.link)}
                  className={`non-expandable-option ${o.isSelected ? 'selected' : ''}`}
                >
                  {o.label}
                </li>
              );
            }
          })
        }
      </ul>
    </div>
  );
}
