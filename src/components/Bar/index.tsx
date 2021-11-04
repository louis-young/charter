import type { BarProps } from "./types";

// Check if it's okay to pass a generic to a component prop interface?

export const Bar = ({
  series,
  selectedSeriesLabel,
  onSelectedSeriesLabelChange,
  onTooltipChange,
}: BarProps<HTMLDivElement>) => {
  const { label, value, getBarProps } = series;

  const handleMouseEnter = () => {
    const newTooltip = `${label}: ${value}`;

    onTooltipChange(newTooltip);
  };

  const handleMouseLeave = () => {
    onTooltipChange(undefined);
  };

  const isSelectedSeries = label === selectedSeriesLabel;

  return (
    <div
      {...getBarProps({
        style: {
          cursor: "pointer",
          border: isSelectedSeries ? "0.2rem solid black" : undefined,
        },
        onClick: () => {
          onSelectedSeriesLabelChange(label);
        },
      })}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};
