# Recity-React-Assignment

Tasks Completed ->
      1. Sidenav
            Collapsible sidenav is created based on a configuration.
            The selection is handled from the route as well.
            When a nested tabs url is provided the tab will open up and the selected tab will be visible.
      2. Dashboard
            All tiles are responsive.
            All tiles have a rounded border.
                  When giving a border radius with a border, the border does not curve but the component corners do.
      3. Routing is enabled.
      4. Page not found is handled.
      5. Wrapper is implemented
            Useful for when the base UI is different for authenticated and unauthencated pages.
            
Known issues ->
      1. The top nav and side nav bars are not responsive.
            I am not too familiar with Bootstrap so wa unable to build this in the timeline assigned.
            For the sidenav and topnav I have used the examples provided on the bootstrap library.
      2. The Search and icons on the topnav do not do anything as there was no design secification of what should it be doing.
      3. The Filter did not specify what kind of a filter it was, so only the static values were added.
      4. The Date Picker has not been added as I ran out of time.
      5. The table scrolling is a little buggy as the header is not sticky. I was not able to figure that out in React + Bootstrap.
            Angular Material provides a way of doing it by setting a property on the table code itself.
      6. The chart is a line chart instead of a line chart.
            I was unable to figure that out on the rechart library.
