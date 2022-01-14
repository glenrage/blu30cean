export const sortItems = (data, params, order) => {
    if (order === "desc")
      return data.sort((a, b) => b[params].localeCompare(a[params]));

    return data.sort((a, b) => a[params].localeCompare(b[params]));
  };