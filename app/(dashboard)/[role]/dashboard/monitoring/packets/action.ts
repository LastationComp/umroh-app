'use server';

import { newApiFetch } from '@/lib/Fetcher';
import { getLaravelToken } from '@/lib/Handling/userSession';
import { createQueryParams } from '@/lib/String/QueryParams';
import { getTimeString, parseDateToTimeString } from '@/lib/String/server/ParsingDate';

export async function getMonitoringPackets(data: any) {
  const token = await getLaravelToken();

  const queryParams = createQueryParams({
    page: data?.page,
    paginate: 10,
  });
  const res = await newApiFetch({
    url: '/api/travel/monitoring/packets' + queryParams,
    token: token,
    options: {
      cache: false,
    },
  });

  const result = await res.json();
  return result.data;
}

export async function getPacketName(id: string) {
  const token = await getLaravelToken();

  const res = await newApiFetch({
    url: '/api/metadata/packet/' + id,
    token: token,
  });

  const result = await res.json();

  return result.data.title;
}

export async function getMonitoringPacketById(id: string) {
  const token = await getLaravelToken();

  const res = await newApiFetch({
    url: '/api/travel/monitoring/packets/' + id,
    token: token,
  });

  return res.json();
}

export async function getMonitoringReportPacket(id: string) {
  const token = await getLaravelToken();

  const res = await newApiFetch({
    url: '/api/travel/monitoring/packets/' + id + '/graph',
    token: token,
  });

  const result = await res.json();

  let labels: any[] = [];
  let datasets: any = {};
  console.log(result);
  for (let int = -3; int <= 3; int++) {
    const date = new Date(new Date().setHours(new Date().getHours() + int));
    const timeFinal: any = parseDateToTimeString(date.toString());
    datasets[timeFinal] = 0;

    const findGraph = result.comparisons_curdate.find((graph: any) => {
      const dateHour = graph.datetime
      console.log(timeFinal, dateHour);

      return dateHour.toString() === timeFinal.toString();
    });

    if (findGraph) {
      datasets[timeFinal] = findGraph.user_count;
    }
  }

  labels = Object.keys(datasets);
  datasets = labels.map((label) => {
    return datasets[label];
  });

  return {
    labels: labels,
    datasets: datasets,
  };
}
