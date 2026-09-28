import danhSachMonAn from './mon-an.json';

function fetchMonAn(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const monAn = danhSachMonAn.find((m) => m.id === id);
      resolve(monAn);
    }, 800);
  });
}

export default fetchMonAn;