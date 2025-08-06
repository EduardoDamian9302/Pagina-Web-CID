import * as echarts from "echarts";
import React, { useEffect, useRef } from "react";

interface EchartComponentProps {
  option: echarts.EChartsOption;
  style?: React.CSSProperties;
}

const EchartComponent: React.FC<EchartComponentProps> = ({ option, style }) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<echarts.ECharts | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      chartInstance.current = echarts.init(chartRef.current);
      chartInstance.current.setOption(option);
    }

    const handleResize = () => {
      chartInstance.current?.resize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chartInstance.current?.dispose();
    };
  }, [option]);

  return (
    <div ref={chartRef} style={{ width: "100%", height: "400px", ...style }} />
  );
};

export default EchartComponent;
