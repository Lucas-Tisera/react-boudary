function wrapPromise(promise) {
  let status = "pending";
  let response;

  const suspender = promise.then((res) => {
    status = "success";
    response = res;
  });

  const handler = {
    pending: () => {
      throw suspender;
    },
    error: () => {
      throw { type: 1, message: "Error al obtener datos" };
    },
    default: () => {
      return response;
    },
  };

  const read = () => {
    return handler[status] ? handler[status]() : handler.default();
  };

  const error = () => {
    return handler.error();
  };

  return { read, error };
}

export default wrapPromise;
