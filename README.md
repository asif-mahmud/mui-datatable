# MUI Datatable

A simple but customizable datatable toolkit built with
[Material UI](https://mui.com/ "Material UI").

The goal here is to build a datatable toolkit that will -

- Be easy to use
- Provide a data management layer separate from the view
- Provide a default view
- Let users of the code customize the default views/components
  through properties
- Let users of the code customize the look-n-feel through
  site theme, like using `createTheme` and `ThemeProvider`
- Let users of the code replace partially or fully the default
  components and implement their own using the data management layer
  
So, it is apparent that, customization or flexibility is the
priority here, not performance. Internally it will be using
react's built-in hooks and data management systems everywhere.
So it should feel familiar if you are accustomed to both
react and material UI systems.
  

# Roadmap

- [x] Render static data
- [x] Allow custom renderring option for table headers
- [x] Allow picking or computing property value
- [x] Allow transforming collected or computed property value
- [x] Allow custom rendering option for table cells
- [x] Allow customizing header cell and value cell properties
- [x] Add column visibility controlling options
- [x] Support loading state
- [x] Add search option
- [ ] Add filterring option
- [ ] Add sort option
- [ ] Add pagination
- [ ] Add persistent table configuration options
- [ ] Add server side data fetching page by page
- [ ] Add server side data searching
- [ ] Add server side data filtering
- [ ] Add server side data sorting
- [ ] Column resizing option
