export const updateObjectArray = (items, itemId, odjPropName, newObjProps) => {
  return items.map(u => {
    if (u[odjPropName] === itemId) {
      return {...u, ...newObjProps}
    }
    return u;
  })
}
