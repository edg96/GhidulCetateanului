import "./Representatives.css";
import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { LoadingPage } from "../common/LoadingPage.js";
import { ErrorPage } from "../common/ErrorPage.js";
import { PARTY_COLORS } from "../../utils/constants/representatives-helper.js";
import { REPRESENTATIVES_TEXT } from "../../utils/constants/representatives-helper.js";
import Stack from "@mui/material/Stack";
import { BarChart, type BarChartProps } from "@mui/x-charts/BarChart";
import { PieChart, type PieChartProps } from "@mui/x-charts/PieChart";
import type { PoliticiansType } from "./RepresentativesSection";
import type { HighlightItemData } from "@mui/x-charts/context";

type RepresentativesProps = {
  politiciansType: PoliticiansType;
};

export function Representatives({ politiciansType }: RepresentativesProps) {
  const [highlightedItem, setHighLightedItem] =
    useState<HighlightItemData | null>(null);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["politiciansType", politiciansType],
    queryFn: async () => {
      const res = await axios.get(
        `http://192.168.1.133:5000/api/${politiciansType}`
      );
      return res.data;
    },
  });

  const politicians: Map<string, number> | null = useMemo(() => {
    if (!data) return null;
    return new Map(Object.entries(data));
  }, [data]);

  const { politicalParties, politiciansPerParty } = useMemo(() => {
    if (!politicians) return { politicalParties: [], politiciansPerParty: [] };
    const politicalParties = Array.from(politicians.keys());
    const politiciansPerParty = politicalParties.map(
      (party) => politicians.get(party)!
    );

    return { politicalParties, politiciansPerParty };
  }, [politicians]);

  const totalNumOfPoltiticians: number | undefined = useMemo(() => {
    if (politicians)
      return Array.from(politicians.values()).reduce(
        (acc, arr) => acc + arr,
        0
      );
  }, [politicians]);

  const chartColors = politicalParties.map(
    (party) => PARTY_COLORS[party] || "#000000ff"
  );

  const highestCount = Math.max(...politiciansPerParty, 0);
  const roundedMax = Math.ceil(highestCount / 10) * 10 || 10;
  const yTicks = Array.from({ length: roundedMax / 10 + 1 }, (_, i) => i * 10);

  const pieData = politicalParties.map((party, index) => ({
    id: party,
    label: party,
    value: politiciansPerParty[index],
    color: chartColors[index],
  }));

  const barChartsProps: BarChartProps = {
    series: [
      {
        data: politiciansPerParty,
        name: "Number of politicians",
        id: "sync",
        highlightScope: { highlight: "item", fade: "global" },
        colorMap: {
          type: "ordinal",
          colors: chartColors,
        },
      },
    ],
    xAxis: [{ data: politicalParties }],
    yAxis: [{ min: 0, max: roundedMax, tickValues: yTicks }],
    height: 300,
    slotProps: {
      legend: {
        direction: "column",
        position: { vertical: "bottom", horizontal: "center" },
        sx: {
          "& .MuiChartsLegend-label": {
            fontSize: 14,
            fontWeight: 600,
          },
        },
        padding: 8,
        itemMarkWidth: 18,
        itemMarkHeight: 18,
      },
    },
  } as unknown as BarChartProps;

  const pieChartProps: PieChartProps = {
    series: [
      {
        id: "sync",
        data: pieData,
        highlightScope: { highlight: "item", fade: "global" },
      },
    ],
    height: 250,
    slotProps: {
      legend: {
        direction: "column",
        position: { vertical: "middle", horizontal: "center" },
        sx: {
          "& .MuiChartsLegend-label": {
            fontSize: 14,
            fontWeight: 600,
          },
        },
        padding: 10,
        itemMarkWidth: 20,
        itemMarkHeight: 20,
      },
    },
    colors: chartColors,
  } as unknown as PieChartProps;

  if (isLoading) return <LoadingPage />;
  if (isError) {
    const axiosError = error as AxiosError;
    const httpStatusCode = axiosError.status || 500;
    return (
      <ErrorPage message={error.message} httpStatusCode={httpStatusCode} />
    );
  }

  return (
    <div className="representatives">
      <div className="description__text">
        <h1 className="representatives__title">
          {politiciansType === "deputies" ? "Camera Deputatilor" : "Senatul"}
        </h1>
        <p className="representatives__description">
          {REPRESENTATIVES_TEXT[politiciansType].description}
        </p>

        <div className="representatives__table-wrapper">
          <table>
            <caption>
              Numar total de{" "}
              {politiciansType === "deputies" ? "deputati" : "senatori"} pe
              partide
            </caption>
            <thead>
              <tr>
                <th scope="col">Partid</th>
                <th scope="col">
                  Numar de{" "}
                  {politiciansType === "deputies" ? "deputati" : "senatori"}
                </th>
                <th scope="col">Procentaj</th>
              </tr>
            </thead>
            <tbody>
              {politicians &&
                totalNumOfPoltiticians &&
                Array.from(politicians, ([party, politiciansCount]) => (
                  <tr>
                    <th scope="row" key={party}>
                      {party}
                    </th>
                    <th>{politiciansCount}</th>
                    <th>
                      {`${Number(
                        (politiciansCount / totalNumOfPoltiticians) * 100
                      ).toFixed(2)}%`}
                    </th>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          sx={{ width: "100%" }}
        >
          <BarChart
            {...barChartsProps}
            highlightedItem={highlightedItem}
            onHighlightChange={setHighLightedItem}
          />
          <PieChart
            {...pieChartProps}
            highlightedItem={highlightedItem}
            onHighlightChange={setHighLightedItem}
          />
        </Stack>
      </div>
    </div>
  );
}
