export const RandomColor = () => {
  // 扩展颜色范围选择
  const colorRange = Math.floor(Math.random() * 9);  // 增加颜色选择范围至9个
  let red, green, blue;

  switch (colorRange) {
    case 0: // 淡黄色
      red = Math.floor(Math.random() * (256 - 230) + 230).toString(16).padStart(2, "0");
      green = Math.floor(Math.random() * (256 - 230) + 230).toString(16).padStart(2, "0");
      blue = Math.floor(Math.random() * (210 - 180) + 180).toString(16).padStart(2, "0");
      break;
    case 1: // 淡绿色
      red = Math.floor(Math.random() * (200 - 150) + 150).toString(16).padStart(2, "0");
      green = Math.floor(Math.random() * (256 - 230) + 230).toString(16).padStart(2, "0");
      blue = Math.floor(Math.random() * (200 - 150) + 150).toString(16).padStart(2, "0");
      break;
    case 2: // 淡蓝色
      red = Math.floor(Math.random() * (180 - 150) + 150).toString(16).padStart(2, "0");
      green = Math.floor(Math.random() * (200 - 180) + 180).toString(16).padStart(2, "0");
      blue = Math.floor(Math.random() * (256 - 230) + 230).toString(16).padStart(2, "0");
      break;
    case 3: // 淡紫色
      red = Math.floor(Math.random() * (256 - 200) + 200).toString(16).padStart(2, "0");
      green = Math.floor(Math.random() * (180 - 150) + 150).toString(16).padStart(2, "0");
      blue = Math.floor(Math.random() * (256 - 200) + 200).toString(16).padStart(2, "0");
      break;
    case 4: // 淡粉色
      red = Math.floor(Math.random() * (256 - 200) + 200).toString(16).padStart(2, "0");
      green = Math.floor(Math.random() * (180 - 160) + 160).toString(16).padStart(2, "0");
      blue = Math.floor(Math.random() * (230 - 200) + 200).toString(16).padStart(2, "0");
      break;
    case 5: // 淡红色
      red = Math.floor(Math.random() * (256 - 200) + 200).toString(16).padStart(2, "0");
      green = Math.floor(Math.random() * (180 - 150) + 150).toString(16).padStart(2, "0");
      blue = Math.floor(Math.random() * (180 - 150) + 150).toString(16).padStart(2, "0");
      break;
    case 6: // 淡橙色
      red = Math.floor(Math.random() * (256 - 230) + 230).toString(16).padStart(2, "0");
      green = Math.floor(Math.random() * (190 - 160) + 160).toString(16).padStart(2, "0");
      blue = Math.floor(Math.random() * (180 - 150) + 150).toString(16).padStart(2, "0");
      break;
    case 7: // 另一种淡黄色
      red = Math.floor(Math.random() * (256 - 240) + 240).toString(16).padStart(2, "0");
      green = Math.floor(Math.random() * (256 - 240) + 240).toString(16).padStart(2, "0");
      blue = Math.floor(Math.random() * (220 - 200) + 200).toString(16).padStart(2, "0");
      break;
    case 8: // 另一种淡紫色
      red = Math.floor(Math.random() * (230 - 200) + 200).toString(16).padStart(2, "0");
      green = Math.floor(Math.random() * (190 - 170) + 170).toString(16).padStart(2, "0");
      blue = Math.floor(Math.random() * (256 - 230) + 230).toString(16).padStart(2, "0");
      break;
  }

  const alpha = Math.floor(Math.random() * (154 - 127) + 127).toString(16).padStart(2, "0");
  return `#${red}${green}${blue}${alpha}`;
};
