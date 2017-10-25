/**
 * @param {Function} props
 * @param {string} entity
 * @param {string} scope
 * @param {string} path
 * @param {string} component
 * @returns {Object}
 */
export const route = (props, entity, scope, path, component) => {
  return {
    path: path,
    component: component,
    name: entity + '.' + scope,
    props: (route) => {
      return props(scope, route)
    }
  }
}

/**
 * @param {string} entity
 * @param {string} title
 * @param {Function} grid
 * @param {Function} form
 * @returns {Array}
 */
export const crud = (entity, title, grid, form) => {
  return [
    {
      path: entity,
      component: 'app/common/crud/index',
      props: {
        title: title
      },
      children: [
        route(grid, entity, 'index', '', 'app/common/crud/grid'),
        route(form, entity, 'create', 'create', 'app/common/crud/form'),
        route(form, entity, 'view', ':id', 'app/common/crud/form'),
        route(form, entity, 'edit', ':id/edit', 'app/common/crud/form')
      ]
    }
  ]
}