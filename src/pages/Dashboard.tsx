import { useQuery } from "react-query";
import Sidebar from "../fragments/Sidebar";
import CovidMap from "../components/Map/CovidMap";
import LineGraph from "../components/Chart/LineGraph";
import React from "react";

// import Map from "../components/Map/Map";
interface CovidData {
  updated: number;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  tests: number;
  population: number;
  affectedCountries: number;
}

const fetchData = async (): Promise<CovidData> => {
  const response = await fetch("https://disease.sh/v3/covid-19/all");
  const data = await response.json();
  return data;
};
const Dashboard = () => {
  const { isLoading, error, data } = useQuery<CovidData>(
    "covidData",
    fetchData
  );

  if (isLoading) return <p>Loading...</p>;

  if (error)
    return (
      <p>
        Error: <>{error}</>
      </p>
    );
  return (
    <div className="flex">
      <Sidebar />
      <div className="container mx-auto mt-12">
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              Total Cases
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              {data?.cases}
            </div>
          </div>
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              Total Active Cases
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              {data?.active}
            </div>
          </div>
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              Total Crtical Patients
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              {data?.critical}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              Total Death
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              {data?.deaths}
            </div>
          </div>
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              Total Recoverd
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              {data?.recovered}
            </div>
          </div>
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              Total Tests
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              {data?.tests}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
          <div
            className="w-full px-4 py-5 bg-white rounded-lg shadow"
            id="lineGraph"
          >
            <LineGraph apiUrl="https://disease.sh/v3/covid-19/historical/all?lastdays=all" />
          </div>
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <CovidMap />
          </div>
        </div>
        {/* <Map /> */}
      </div>
    </div>
  );
};
export default Dashboard;
