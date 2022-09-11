async function set(key, value) {
  const res = await fetch(`/api/kv/set`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ key: key, value: value }),
  });
  const data = await res.json();
  if (data) {
    const fetchList = await list();
    return {
      key: key,
      value: value,
      data: { success: data, list: fetchList.data.list },
    };
  }
}
async function clear(key) {
  const res = await fetch(`/api/kv/clear`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ key, key }),
  });
  const data = await res.json();
  if (data) {
    const fetchList = await list();
    return {
      key: key,
      data: { success: data, list: fetchList.data.list },
    };
  }
  return { data: { success: data } };
}

async function list() {
  const res = await fetch(`/api/kv/list`, {
    method: "GET",
  });
  const data = await res.json();
  return { data: { list: data } };
}
module.exports = {
  set,
  clear,
  list,
};
