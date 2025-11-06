import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { LineChart, Line, AreaChart, Area, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Badge } from '../ui/badge';
import { Cloud, CloudRain, Wind, Thermometer, Droplets, Eye, AlertTriangle } from 'lucide-react';

// Mock weather data
const forecastData = [
  { time: '14:00', temp: 24, humidity: 45, windSpeed: 12, rainChance: 5, trackTemp: 32 },
  { time: '15:00', temp: 25, humidity: 48, windSpeed: 14, rainChance: 10, trackTemp: 34 },
  { time: '16:00', temp: 26, humidity: 52, windSpeed: 15, rainChance: 15, trackTemp: 35 },
  { time: '17:00', temp: 27, humidity: 55, windSpeed: 18, rainChance: 25, trackTemp: 36 },
  { time: '18:00', temp: 26, humidity: 60, windSpeed: 20, rainChance: 40, trackTemp: 34 },
  { time: '19:00', temp: 24, humidity: 65, windSpeed: 22, rainChance: 55, trackTemp: 30 },
  { time: '20:00', temp: 22, humidity: 70, windSpeed: 25, rainChance: 70, trackTemp: 26 },
  { time: '21:00', temp: 20, humidity: 75, windSpeed: 23, rainChance: 60, trackTemp: 23 },
];

const historicalPerformance = [
  { condition: 'Dry & Hot (>28°C)', races: 8, avgPosition: 1.8, winRate: 62 },
  { condition: 'Dry & Warm (23-28°C)', races: 12, avgPosition: 2.1, winRate: 50 },
  { condition: 'Dry & Cool (<23°C)', races: 6, avgPosition: 2.8, winRate: 33 },
  { condition: 'Damp Track', races: 3, avgPosition: 3.3, winRate: 0 },
  { condition: 'Wet', races: 2, avgPosition: 4.5, winRate: 0 },
];

const trackConditions = {
  surface: 'Dry',
  grip: 92,
  temperature: 34,
  airTemp: 26,
  humidity: 52,
  windSpeed: 15,
  windDirection: 'NE',
  visibility: 'Excellent',
  pressure: 1015,
};

export function WeatherTracking() {
  const raceTime = '18:00';
  const raceTimeData = forecastData.find(d => d.time === raceTime);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
          Weather & Track Conditions
        </h2>
        <p className="text-gray-400">Real-time monitoring and race-time predictions</p>
      </div>

      {/* Current Conditions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Track Temperature</CardTitle>
            <Thermometer className="w-4 h-4 text-[#ff6600]" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{trackConditions.temperature}°C</div>
            <p className="text-xs text-gray-500">Air: {trackConditions.airTemp}°C</p>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Humidity</CardTitle>
            <Droplets className="w-4 h-4 text-[#ff6600]" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{trackConditions.humidity}%</div>
            <p className="text-xs text-gray-500">Track grip: {trackConditions.grip}%</p>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Wind Speed</CardTitle>
            <Wind className="w-4 h-4 text-[#ff6600]" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{trackConditions.windSpeed} km/h</div>
            <p className="text-xs text-gray-500">Direction: {trackConditions.windDirection}</p>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Visibility</CardTitle>
            <Eye className="w-4 h-4 text-[#ff6600]" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              <Badge variant="outline" className="text-green-500 border-green-500">
                {trackConditions.visibility}
              </Badge>
            </div>
            <p className="text-xs text-gray-500">Pressure: {trackConditions.pressure} hPa</p>
          </CardContent>
        </Card>
      </div>

      {/* Race Time Forecast Alert */}
      {raceTimeData && raceTimeData.rainChance > 30 && (
        <Card className="bg-[rgba(255,165,0,0.1)] border-yellow-500 text-white">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2">Weather Alert for Race Time ({raceTime})</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400">Rain Chance</p>
                    <p className="text-xl font-bold text-yellow-500">{raceTimeData.rainChance}%</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Temperature</p>
                    <p className="text-xl font-bold">{raceTimeData.temp}°C</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Wind Speed</p>
                    <p className="text-xl font-bold">{raceTimeData.windSpeed} km/h</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Track Temp</p>
                    <p className="text-xl font-bold">{raceTimeData.trackTemp}°C</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-gray-300">
                  <span className="font-semibold text-yellow-500">Recommendation:</span> Prepare wet weather setup and monitor conditions closely. Consider intermediate tire compound if track becomes damp.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Weather Forecast */}
      <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
        <CardHeader>
          <CardTitle>8-Hour Weather Forecast</CardTitle>
          <CardDescription className="text-gray-400">
            Temperature, humidity, wind, and precipitation forecast
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={forecastData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
              <XAxis dataKey="time" stroke="#666" />
              <YAxis yAxisId="left" stroke="#666" />
              <YAxis yAxisId="right" orientation="right" stroke="#666" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}
                labelStyle={{ color: '#fff' }}
              />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="temp" stroke="#ff6600" strokeWidth={2} name="Air Temp (°C)" />
              <Line yAxisId="left" type="monotone" dataKey="trackTemp" stroke="#ff0066" strokeWidth={2} name="Track Temp (°C)" />
              <Line yAxisId="right" type="monotone" dataKey="rainChance" stroke="#0088ff" strokeWidth={2} name="Rain Chance %" strokeDasharray="5 5" />
              <Line yAxisId="right" type="monotone" dataKey="windSpeed" stroke="#00ff88" strokeWidth={2} name="Wind Speed (km/h)" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Performance by Weather Conditions */}
      <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
        <CardHeader>
          <CardTitle>Historical Performance by Weather Conditions</CardTitle>
          <CardDescription className="text-gray-400">
            Team performance analysis across different weather scenarios
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {historicalPerformance.map((perf, idx) => (
              <div key={idx} className="border border-[#2a2a2a] rounded-lg p-4 bg-[rgba(255,255,255,0.02)]">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {perf.condition.includes('Wet') ? (
                      <CloudRain className="w-5 h-5 text-blue-400" />
                    ) : (
                      <Cloud className="w-5 h-5 text-gray-400" />
                    )}
                    <h3 className="font-semibold text-lg">{perf.condition}</h3>
                  </div>
                  <Badge variant="outline" className="text-gray-400">
                    {perf.races} races
                  </Badge>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Avg Position</p>
                    <p className="text-2xl font-bold text-[#ff6600]">{perf.avgPosition}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Win Rate</p>
                    <p className="text-2xl font-bold text-green-500">{perf.winRate}%</p>
                  </div>
                  <div className="flex items-end">
                    <div className="flex-1 h-2 bg-[#2a2a2a] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"
                        style={{ width: `${perf.winRate}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-[rgba(255,102,0,0.1)] border border-[#ff6600] rounded-lg">
            <p className="text-sm">
              <span className="font-semibold text-[#ff6600]">AI Insight:</span> Team performs optimally in warm, dry conditions (23-28°C). Win rate drops significantly in wet conditions - prioritize wet weather setup development and driver training.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Track-Specific Weather Impact */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <CardHeader>
            <CardTitle className="text-base">Optimal Conditions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Temperature:</span>
                <span className="font-semibold">24-27°C</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Track Temp:</span>
                <span className="font-semibold">32-36°C</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Humidity:</span>
                <span className="font-semibold">45-55%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Wind:</span>
                <span className="font-semibold">&lt;18 km/h</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <CardHeader>
            <CardTitle className="text-base">Current Match</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#ff6600] mb-2">87%</div>
              <p className="text-sm text-gray-400">Conditions match optimal parameters</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <CardHeader>
            <CardTitle className="text-base">Setup Recommendation</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge className="bg-green-500/20 text-green-500 border-green-500 mb-2">
              Dry Setup Optimal
            </Badge>
            <p className="text-xs text-gray-400">
              Current conditions favor aggressive dry setup with maximum downforce configuration
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
