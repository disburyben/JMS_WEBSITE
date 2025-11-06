import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { LineChart, Line, ScatterChart, Scatter, AreaChart, Area, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Cell } from 'recharts';
import { Badge } from '../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Clock, TrendingDown, Target, Zap } from 'lucide-react';

// Mock lap time data
const lapTimesData = [
  { lap: 1, time: 12.85, sector1: 3.2, sector2: 4.5, sector3: 5.15, fuel: 95 },
  { lap: 2, time: 12.42, sector1: 3.1, sector2: 4.3, sector3: 5.02, fuel: 90 },
  { lap: 3, time: 12.28, sector1: 3.08, sector2: 4.25, sector3: 4.95, fuel: 85 },
  { lap: 4, time: 12.18, sector1: 3.05, sector2: 4.22, sector3: 4.91, fuel: 80 },
  { lap: 5, time: 12.08, sector1: 3.02, sector2: 4.18, sector3: 4.88, fuel: 75 },
  { lap: 6, time: 12.15, sector1: 3.04, sector2: 4.21, sector3: 4.90, fuel: 70 },
  { lap: 7, time: 12.22, sector1: 3.06, sector2: 4.24, sector3: 4.92, fuel: 65 },
  { lap: 8, time: 12.19, sector1: 3.04, sector2: 4.22, sector3: 4.93, fuel: 60 },
  { lap: 9, time: 12.12, sector1: 3.03, sector2: 4.19, sector3: 4.90, fuel: 55 },
  { lap: 10, time: 12.16, sector1: 3.05, sector2: 4.20, sector3: 4.91, fuel: 50 },
];

const sectorComparison = [
  { sector: 'Sector 1', personal: 3.02, competitive: 2.98, optimal: 2.95 },
  { sector: 'Sector 2', personal: 4.18, competitive: 4.15, optimal: 4.12 },
  { sector: 'Sector 3', personal: 4.88, competitive: 4.92, optimal: 4.85 },
];

const competitorLapTimes = [
  { lap: 1, car88: 12.85, car23: 12.92, car14: 12.78, car31: 13.05 },
  { lap: 2, car88: 12.42, car23: 12.55, car14: 12.48, car31: 12.68 },
  { lap: 3, car88: 12.28, car23: 12.38, car14: 12.32, car31: 12.52 },
  { lap: 4, car88: 12.18, car23: 12.25, car14: 12.28, car31: 12.45 },
  { lap: 5, car88: 12.08, car23: 12.18, car14: 12.22, car31: 12.38 },
  { lap: 6, car88: 12.15, car23: 12.22, car14: 12.25, car31: 12.42 },
  { lap: 7, car88: 12.22, car23: 12.28, car14: 12.32, car31: 12.48 },
  { lap: 8, car88: 12.19, car23: 12.24, car14: 12.29, car31: 12.44 },
];

const tirePerformance = [
  { laps: '0-5', performance: 98, wear: 5 },
  { laps: '6-10', performance: 96, wear: 12 },
  { laps: '11-15', performance: 92, wear: 22 },
  { laps: '16-20', performance: 88, wear: 35 },
  { laps: '21-25', performance: 82, wear: 52 },
  { laps: '26-30', performance: 75, wear: 72 },
];

export function LapTimeAnalysis() {
  const bestLap = Math.min(...lapTimesData.map(l => l.time));
  const averageLap = (lapTimesData.reduce((sum, l) => sum + l.time, 0) / lapTimesData.length).toFixed(2);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            Lap Time Analysis
          </h2>
          <p className="text-gray-400">Detailed sector and lap performance breakdown</p>
        </div>
        <div className="flex gap-3">
          <Select defaultValue="last-race">
            <SelectTrigger className="w-[180px] bg-[#1a1a1a] border-[#2a2a2a]">
              <SelectValue placeholder="Select race" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a1a1a] border-[#2a2a2a]">
              <SelectItem value="last-race">Valvoline Raceway</SelectItem>
              <SelectItem value="premier">Premier Speedway</SelectItem>
              <SelectItem value="toowoomba">Toowoomba Speedway</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Best Lap</CardTitle>
            <Zap className="w-4 h-4 text-[#ff6600]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#ff6600]">{bestLap}s</div>
            <p className="text-xs text-gray-500">Lap 5</p>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Average</CardTitle>
            <Clock className="w-4 h-4 text-[#ff6600]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{averageLap}s</div>
            <p className="text-xs text-gray-500">±0.08s variance</p>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Improvement</CardTitle>
            <TrendingDown className="w-4 h-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">-0.77s</div>
            <p className="text-xs text-gray-500">From lap 1 to best</p>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Theoretical Best</CardTitle>
            <Target className="w-4 h-4 text-[#ff6600]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#ff6600]">11.95s</div>
            <p className="text-xs text-gray-500">Best sectors combined</p>
          </CardContent>
        </Card>
      </div>

      {/* Lap Time Progression */}
      <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
        <CardHeader>
          <CardTitle>Lap Time Progression</CardTitle>
          <CardDescription className="text-gray-400">
            Lap times with fuel load correlation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={lapTimesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
              <XAxis dataKey="lap" stroke="#666" label={{ value: 'Lap Number', position: 'insideBottom', offset: -5 }} />
              <YAxis
                yAxisId="left"
                stroke="#666"
                domain={[11.5, 13]}
                label={{ value: 'Lap Time (s)', angle: -90, position: 'insideLeft' }}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                stroke="#666"
                label={{ value: 'Fuel (%)', angle: 90, position: 'insideRight' }}
              />
              <Tooltip
                contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}
                labelStyle={{ color: '#fff' }}
              />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="time" stroke="#ff6600" strokeWidth={3} name="Lap Time" dot={{ r: 4 }} />
              <Line yAxisId="right" type="monotone" dataKey="fuel" stroke="#00ff88" strokeWidth={2} name="Fuel Load" strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Sector Analysis and Competitor Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <CardHeader>
            <CardTitle>Sector Time Comparison</CardTitle>
            <CardDescription className="text-gray-400">
              Personal best vs. competitive field vs. theoretical optimal
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {sectorComparison.map((sector, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{sector.sector}</span>
                    <div className="flex gap-4 text-sm">
                      <Badge variant="outline">PB: {sector.personal}s</Badge>
                      <span className="text-gray-400">Field: {sector.competitive}s</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-3 bg-[#2a2a2a] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#ff6600] rounded-full"
                          style={{ width: `${(sector.optimal / sector.personal) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs text-green-500">Target: {sector.optimal}s</span>
                    </div>
                    {sector.personal <= sector.competitive ? (
                      <p className="text-xs text-green-500">✓ Faster than field average</p>
                    ) : (
                      <p className="text-xs text-yellow-500">
                        ⚠ {((sector.personal - sector.competitive) * 1000).toFixed(0)}ms slower than field
                      </p>
                    )}
                  </div>
                </div>
              ))}
              <div className="mt-4 p-3 bg-[rgba(255,102,0,0.1)] border border-[#ff6600] rounded-lg">
                <p className="text-sm">
                  <span className="font-semibold text-[#ff6600]">AI Insight:</span> Sector 1 shows the most potential for improvement. Focus on turn-in speed and throttle application timing.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <CardHeader>
            <CardTitle>Competitor Lap Time Comparison</CardTitle>
            <CardDescription className="text-gray-400">
              Top 4 cars lap time evolution
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={competitorLapTimes}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
                <XAxis dataKey="lap" stroke="#666" />
                <YAxis stroke="#666" domain={[11.8, 13.2]} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}
                  labelStyle={{ color: '#fff' }}
                />
                <Legend />
                <Line type="monotone" dataKey="car88" stroke="#ff6600" strokeWidth={3} name="Car #88 (You)" />
                <Line type="monotone" dataKey="car23" stroke="#00ff88" strokeWidth={2} name="Car #23" />
                <Line type="monotone" dataKey="car14" stroke="#0088ff" strokeWidth={2} name="Car #14" />
                <Line type="monotone" dataKey="car31" stroke="#ff0088" strokeWidth={2} name="Car #31" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Tire Performance Degradation */}
      <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
        <CardHeader>
          <CardTitle>Tire Performance & Degradation</CardTitle>
          <CardDescription className="text-gray-400">
            Performance percentage and wear rate over tire life
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={tirePerformance}>
              <defs>
                <linearGradient id="performanceGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00ff88" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#00ff88" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="wearGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ff0088" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#ff0088" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
              <XAxis dataKey="laps" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}
                labelStyle={{ color: '#fff' }}
              />
              <Legend />
              <Area type="monotone" dataKey="performance" stroke="#00ff88" fillOpacity={1} fill="url(#performanceGradient)" name="Performance %" />
              <Area type="monotone" dataKey="wear" stroke="#ff0088" fillOpacity={1} fill="url(#wearGradient)" name="Wear %" />
            </AreaChart>
          </ResponsiveContainer>
          <div className="mt-4 p-3 bg-[rgba(255,102,0,0.1)] border border-[#ff6600] rounded-lg">
            <p className="text-sm">
              <span className="font-semibold text-[#ff6600]">Pit Strategy Recommendation:</span> Optimal pit window is laps 18-22 based on tire degradation model and competitor strategies.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
