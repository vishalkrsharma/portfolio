'use client';

import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

const CirclePack = ({
  data,
  width = 600,
  height = 600,
  color,
  padding = 4,
  showLabels = true,
  onClick,
  onHover,
  minCircleRadius = 3,
  excludeRoot = false,
  className,
}: {
  data: any;
  width?: number;
  height?: number;
  color?: string;
  padding?: number;
  showLabels?: boolean;
  onClick?: (node: any) => void;
  onHover?: (node: any) => void;
  minCircleRadius?: number;
  excludeRoot?: boolean;
  className?: string;
}) => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !chartRef.current || !data) return;

    let chart: any;
    const container = chartRef.current as HTMLDivElement;

    const loadChart = async () => {
      try {
        const CirclePack = (await import('circlepack-chart')).default;

        // Default color function based on depth
        const defaultColor = (node: any) => {
          const colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#06b6d4', '#ef4444'];
          return colors[node.depth % colors.length];
        };

        chart = new CirclePack(container)
          .data(data)
          .width(width)
          .height(height)
          .label('name')
          .size('value')
          .color(color || defaultColor)
          .padding(padding)
          .minCircleRadius(minCircleRadius)
          .excludeRoot(excludeRoot)
          .showLabels(showLabels)
          .tooltipContent((node: any) => {
            return `<div style="padding: 8px;">
              <strong>${node.data.name}</strong><br/>
              Value: ${node.value || node.data.value}
            </div>`;
          });

        // Set up click handler
        if (onClick) {
          chart.onClick(onClick);
        } else {
          // Default: zoom to node on click
          chart.onClick((node: any) => {
            if (node) chart.zoomToNode(node);
          });
        }

        // Set up hover handler
        if (onHover) {
          chart.onHover(onHover);
        }
      } catch (error) {
        console.error('Error loading circlepack-chart:', error);
      }
    };

    loadChart();

    return () => {
      if (chartRef.current) {
        chartRef.current.innerHTML = '';
      }
    };
  }, [isClient, data, width, height, color, padding, showLabels, onClick, onHover, minCircleRadius, excludeRoot]);

  if (!isClient) {
    return (
      <div
        style={{ width, height }}
        className='flex items-center justify-center bg-gray-100'
      >
        <div className='text-gray-500'>Loading chart...</div>
      </div>
    );
  }

  return (
    <div
      ref={chartRef}
      style={{ width, height }}
      className={cn('', className)}
    />
  );
};

export default CirclePack;
