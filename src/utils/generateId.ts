const generateId = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0; // random 0–15
    const v = c === 'x' ? r : (r & 0x3) | 0x8; // UUID v4 variant
    return v.toString(16);
  });
};

export default generateId;
