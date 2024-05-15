import Elastic from "@/components/Elastic";
import MenuIcon from "@/components/MenuIcon";
import NumberGradient from "@/components/NumberGradient";
import RingingBell from "@/components/RingingBell";
import ShapeChange from "@/components/ShapeChange";
import Statistic from "@/components/Statistic";
import SunnyDay from "@/components/SunnyDay";
import SwimmingLine from "@/components/SwimmingLine";

const components: {
  [key: string]: any; // 定义一个字符串索引签名，表示可以动态添加组件
} = {
  "elastic": Elastic,
  "menu-icon": MenuIcon,
  "number-gradient": NumberGradient,
  "ringing-bell": RingingBell,
  "shape-change": ShapeChange,
  "statistic": Statistic,
  "sunny-day": SunnyDay,
  "swimming-line": SwimmingLine,
};

const componentNames = Object.keys(components).map((name) => {
  return name;
});

export { components, componentNames };
