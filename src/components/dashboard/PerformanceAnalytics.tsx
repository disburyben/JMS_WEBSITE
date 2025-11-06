import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';

// Mock performance data
const accelerationData = [
  { rpm: 2000, torque: 520, power: 480, temp: 85 },
  { rpm: 3000, torque: 580, power: 620, temp: 92 },
  { rpm: 4000, torque: 620, power: 710, temp: 98 },
  { rpm: 5000, torque: 650, power: 780, temp: 105 },
  { rpm: 6000, torque: 670, power: 830, temp: 112 },
  { rpm: 7000, torque: 680, power: 860, temp: 118 },
  { rpm: 8000, torque: 685, power: 880, temp: 125 },
];

const driverSkillsData = [
  { skill: 'Cornering', value: 92, fullMark: 100 },
  { skill: 'Acceleration', value: 88, fullMark: 100 },
  { skill: 'Braking', value: 85, fullMark: 100 },
  { skill: 'Overtaking', value: 90, fullMark: 100 },
  { skill: 'Consistency', value: 94, fullMark: 100 },
  { skill: 'Wet Weather', value: 82, fullMark: 100 },
];

const setupComparison = [
  { metric: 'Top Speed', baseline: 185, current: 192, optimal: 195 },
  { metric: 'Acceleration', baseline: 3.2, current: 2.9, optimal: 2.7 },
  { metric: 'Cornering G-Force', baseline: 3.8, current: 4.2, optimal: 4.5 },
  { metric: 'Brake Distance', baseline: 48, current: 42, optimal: 38 },
  { metric: 'Tire Wear Rate', baseline: 100, current: 85, optimal: 70 },
];

export function PerformanceAnalytics() {
  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            Performance Analytics
          </h2>
          <p className="text-gray-400">Comprehensive vehicle and driver performance metrics</p>
        </div>
        <div className="flex gap-3">
          <Select defaultValue="last-race">
            <SelectTrigger className="w-[180px] bg-[#1a1a1a] border-[#2a2a2a]">
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a1a1a] border-[#2a2a2a]">
              <SelectItem value="last-race">Last Race</SelectItem>
              <SelectItem value="last-5">Last 5 Races</SelectItem>
              <SelectItem value="season">Full Season</SelectItem>
              <SelectItem value="all-time">All Time</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="car-88">
            <SelectTrigger className="w-[150px] bg-[#1a1a1a] border-[#2a2a2a]">
              <SelectValue placeholder="Select car" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a1a1a] border-[#2a2a2a]">
              <SelectItem value="car-88">Car #88</SelectItem>
              <SelectItem value="car-88-backup">Backup Car</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Engine Performance */}
      <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
        <CardHeader>
          <CardTitle>Engine Performance Curve</CardTitle>
          <CardDescription className="text-gray-400">
            Power, torque, and temperature across RPM range
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={accelerationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
              <XAxis dataKey="rpm" stroke="#666" label={{ value: 'RPM', position: 'insideBottom', offset: -5 }} />
              <YAxis stroke="#666" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}
                labelStyle={{ color: '#fff' }}
              />
              <Legend />
              <Line type="monotone" dataKey="power" stroke="#ff6600" strokeWidth={2} name="Horsepower" />
              <Line type="monotone" dataKey="torque" stroke="#00ff88" strokeWidth={2} name="Torque (lb-ft)" />
              <Line type="monotone" dataKey="temp" stroke="#ff0066" strokeWidth={2} name="Temperature (°C)" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Driver Skills Radar */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <CardHeader>
            <CardTitle>Driver Performance Profile</CardTitle>
            <CardDescription className="text-gray-400">
              Multi-dimensional skill assessment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={driverSkillsData}>
                <PolarGrid stroke="#2a2a2a" />
                <PolarAngleAxis dataKey="skill" stroke="#666" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#666" />
                <Radar name="Performance" dataKey="value" stroke="#ff6600" fill="#ff6600" fillOpacity={0.6} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}
                  labelStyle={{ color: '#fff' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Setup Comparison */}
        <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <CardHeader>
            <CardTitle>Setup Optimization Analysis</CardTitle>
            <CardDescription className="text-gray-400">
              Current vs. baseline vs. AI-recommended optimal
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {setupComparison.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{item.metric}</span>
                    <div className="flex gap-4 text-xs">
                      <span className="text-gray-500">Baseline: {item.baseline}</span>
                      <Badge variant="outline" className="text-[#ff6600] border-[#ff6600]">
                        Current: {item.current}
                      </Badge>
                      <span className="text-green-500">Optimal: {item.optimal}</span>
                    </div>
                  </div>
                  <div className="relative h-2 bg-[#2a2a2a] rounded-full overflow-hidden">
                    <div
                      className="absolute h-full bg-gradient-to-r from-gray-600 to-[#ff6600]"
                      style={{ width: `${(item.current / item.optimal) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-[rgba(255,102,0,0.1)] border border-[#ff6600] rounded-lg">
              <p className="text-sm">
                <span className="font-semibold text-[#ff6600]">AI Recommendation:</span> Adjust front wing angle by +2° and increase rear damper compression by 5% for optimal performance based on track conditions.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <CardHeader>
            <CardTitle className="text-base">Average Speed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#ff6600]">168.5 km/h</div>
            <p className="text-xs text-gray-500 mt-1">+5.2 km/h vs. season avg</p>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <CardHeader>
            <CardTitle className="text-base">Consistency Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#ff6600]">94.2%</div>
            <p className="text-xs text-gray-500 mt-1">Lap time variance: ±0.08s</p>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <CardHeader>
            <CardTitle className="text-base">Overtaking Success</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#ff6600]">78%</div>
            <p className="text-xs text-gray-500 mt-1">32 successful / 41 attempts</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
