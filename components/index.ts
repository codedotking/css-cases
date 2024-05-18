import Elastic from "@/components/Elastic";
import MenuIcon from "@/components/MenuIcon";
import NumberGradient from "@/components/NumberGradient";
import RingingBell from "@/components/RingingBell";
import ShapeChange from "@/components/ShapeChange";
import Statistic from "@/components/Statistic";
import SunnyDay from "@/components/SunnyDay";
import SwimmingLine from "@/components/SwimmingLine";
import TwilightWaves from "@/components/TwilightWaves";
import Parasol3D from "@/components/Parasol3D";
import DroppedBall from "@/components/DroppedBall";
import NewtonPendulum from "@/components/NewtonPendulum";
import Cube from "@/components/Cube";
const components: {
  [key: string]: any; // 定义一个字符串索引签名，表示可以动态添加组件
} = {
  elastic: Elastic,
  "menu-icon": MenuIcon,
  "number-gradient": NumberGradient,
  "ringing-bell": RingingBell,
  "shape-change": ShapeChange,
  statistic: Statistic,
  "sunny-day": SunnyDay,
  "swimming-line": SwimmingLine,
  "twilight-waves": TwilightWaves,
  "parasol-3d": Parasol3D,
  "dropped-ball": DroppedBall,
  "newton-pendulum": NewtonPendulum,
  "cube": Cube,
};

const componentNames = Object.keys(components).map((name) => {
  return name;
});

export { components, componentNames };
