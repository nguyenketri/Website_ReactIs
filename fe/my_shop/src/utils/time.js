/**
 * Chuyển giây thành "Xd HH:MM:SS"
 * @param {number} seconds - tổng số giây còn lại
 * @returns {string} - ví dụ: "2d 03:15:10"
 */
export const formatTimeAdvanced = (seconds) => {
  const days = Math.floor(seconds / (24 * 3600));
  const hours = Math.floor((seconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const pad = (num) => num.toString().padStart(2, "0");

  let result = "";
  if (days > 0) result += `${days}d `;
  result += `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
  return result;
};

/**
 * Tính số giây còn lại từ thời gian hiện tại đến endTime
 * @param {Date} endTime - thời gian kết thúc
 * @returns {number} - số giây còn lại
 */
export const getSecondsLeft = (endTime) => {
  const now = new Date();
  const diff = Math.floor((endTime.getTime() - now.getTime()) / 1000);
  return diff > 0 ? diff : 0;
};
