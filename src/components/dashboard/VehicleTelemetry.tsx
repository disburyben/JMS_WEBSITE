import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { LineChart, Line, AreaChart, Area, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Gauge, AlertCircle, CheckCircle, Wrench, Activity, Battery, Thermometer } from 'lucide-react';

// Mock telemetry data
const engineTelemetry = [
  { time: 0, rpm: 3500, throttle: 45, brake: 0, speed: 85, oilTemp: 92, waterTemp: 88, oilPressure: 65 },
  { time: 1, rpm: 5200, throttle: 78, brake: 0, speed: 125, oilTemp: 94, waterTemp: 89, oilPressure: 72 },
  { time: 2, rpm: 7100, throttle: 95, brake: 0, speed: 168, oilTemp: 98, waterTemp: 92, oilPressure: 78 },
  { time: 3, rpm: 7800, throttle: 100, brake: 0, speed: 185, oilTemp: 102, waterTemp: 95, oilPressure: 82 },
  { time: 4, rpm: 6200, throttle: 0, brake: 85, speed: 142, oilTemp: 104, waterTemp: 96, oilPressure: 68 },
  { time: 5, rpm: 4100, throttle: 0, brake: 100, speed: 98, oilTemp: 105, waterTemp: 97, oilPressure: 58 },
  { time: 6, rpm: 3800, throttle: 35, brake: 0, speed: 75, oilTemp: 106, waterTemp: 98, oilPressure: 62 },
  { time: 7, rpm: 5500, throttle: 82, brake: 0, speed: 135, oilTemp: 108, waterTemp: 99, oilPressure: 74 },
  { time: 8, rpm: 7300, throttle: 98, brake: 0, speed: 172, oilTemp: 110, waterTemp: 100, oilPressure: 80 },
  { time: 9, rpm: 7900, throttle: 100, brake: 0, speed: 188, oilTemp: 112, waterTemp: 102, oilPressure: 83 },
];

const suspensionData = [
  { corner: 'Turn 1', gForce: 3.2, compression: 68, damping: 72, rollAngle: 12 },
  { corner: 'Turn 2', gForce: 4.1, compression: 82, damping: 85, rollAngle: 18 },
  { corner: 'Turn 3', gForce: 3.8, compression: 75, damping: 78, rollAngle: 15 },
  { corner: 'Turn 4', gForce: 4.5, compression: 88, damping: 90, rollAngle: 22 },
];

const systemStatus = [
  { system: 'Engine', status: 'optimal', health: 98, lastService: '2 days ago', nextService: '3 races' },
  { system: 'Transmission', status: 'optimal', health: 96, lastService: '5 days ago', nextService: '5 races' },
  { system: 'Suspension', status: 'warning', health: 88, lastService: '1 day ago', nextService: '1 race' },
  { system: 'Brakes', status: 'optimal', health: 94, lastService: '1 day ago', nextService: '2 races' },
  { system: 'Tires', status: 'optimal', health: 92, lastService: 'Current', nextService: '18 laps' },
  { system: 'Fuel System', status: 'optimal', health: 99, lastService: '3 days ago', nextService: '4 races' },
  { system: 'Electronics', status: 'optimal', health: 100, lastService: '1 week ago', nextService: '8 races' },
  { system: 'Aerodynamics', status: 'caution', health: 85, lastService: '2 days ago', nextService: 'Check required' },
];

const alerts = [
  { severity: 'warning', component: 'Front Left Suspension', message: 'Damper showing increased wear - recommend inspection', time: '5 mins ago' },
  { severity: 'info', component: 'Rear Wing', message: 'Minor adjustment needed for optimal downforce', time: '15 mins ago' },
  { severity: 'caution', component: 'Tire Pressure', message: 'Right rear pressure 0.5 PSI below optimal', time: '22 mins ago' },
];

export function VehicleTelemetry() {
  const overallHealth = Math.round(systemStatus.reduce((sum, s) => sum + s.health, 0) / systemStatus.length);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            Vehicle Telemetry & Diagnostics
          </h2>
          <p className="text-gray-400">Real-time vehicle system monitoring and health analysis</p>
        </div>
        <div className="flex items-center gap-3">
          <Badge className="bg-green-500/20 text-green-500 border-green-500">
            Car #88 - Active
          </Badge>
          <div className="flex items-center gap-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2">
            <Activity className="w-4 h-4 text-[#ff6600]" />
            <span className="text-sm font-semibold">Live Telemetry</span>
          </div>
        </div>
      </div>

      {/* Overall Health Status */}
      <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Vehicle Health Overview</span>
            <div className="flex items-center gap-2">
              <Gauge className="w-5 h-5 text-[#ff6600]" />
              <span className="text-3xl font-bold text-[#ff6600]">{overallHealth}%</span>
            </div>
          </CardTitle>
          <CardDescription className="text-gray-400">
            All systems operational status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {systemStatus.map((system, idx) => (
              <div key={idx} className="border border-[#2a2a2a] rounded-lg p-4 bg-[rgba(255,255,255,0.02)]">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {system.status === 'optimal' && <CheckCircle className="w-5 h-5 text-green-500" />}
                    {system.status === 'warning' && <AlertCircle className="w-5 h-5 text-yellow-500" />}
                    {system.status === 'caution' && <AlertCircle className="w-5 h-5 text-orange-500" />}
                    <h3 className="font-semibold">{system.system}</h3>
                  </div>
                  <Badge
                    variant="outline"
                    className={
                      system.status === 'optimal' ? 'text-green-500 border-green-500' :
                      system.status === 'warning' ? 'text-yellow-500 border-yellow-500' :
                      'text-orange-500 border-orange-500'
                    }
                  >
                    {system.health}%
                  </Badge>
                </div>
                <Progress value={system.health} className="h-2 mb-3" />
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Last: {system.lastService}</span>
                  <span>Next: {system.nextService}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Active Alerts */}
      {alerts.length > 0 && (
        <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-yellow-500" />
              Active Alerts ({alerts.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {alerts.map((alert, idx) => (
                <div
                  key={idx}
                  className={`border rounded-lg p-4 ${
                    alert.severity === 'warning' ? 'border-yellow-500 bg-yellow-500/10' :
                    alert.severity === 'caution' ? 'border-orange-500 bg-orange-500/10' :
                    'border-blue-500 bg-blue-500/10'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge
                          variant="outline"
                          className={
                            alert.severity === 'warning' ? 'text-yellow-500 border-yellow-500' :
                            alert.severity === 'caution' ? 'text-orange-500 border-orange-500' :
                            'text-blue-500 border-blue-500'
                          }
                        >
                          {alert.severity.toUpperCase()}
                        </Badge>
                        <span className="font-semibold">{alert.component}</span>
                      </div>
                      <p className="text-sm text-gray-300">{alert.message}</p>
                    </div>
                    <span className="text-xs text-gray-500 whitespace-nowrap ml-4">{alert.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Engine Telemetry */}
      <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
        <CardHeader>
          <CardTitle>Engine & Performance Telemetry</CardTitle>
          <CardDescription className="text-gray-400">
            Live data stream - last lap analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={engineTelemetry}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
              <XAxis dataKey="time" stroke="#666" label={{ value: 'Time (s)', position: 'insideBottom', offset: -5 }} />
              <YAxis yAxisId="left" stroke="#666" />
              <YAxis yAxisId="right" orientation="right" stroke="#666" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}
                labelStyle={{ color: '#fff' }}
              />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="rpm" stroke="#ff6600" strokeWidth={2} name="RPM" />
              <Line yAxisId="left" type="monotone" dataKey="speed" stroke="#00ff88" strokeWidth={2} name="Speed (km/h)" />
              <Line yAxisId="right" type="monotone" dataKey="throttle" stroke="#0088ff" strokeWidth={2} name="Throttle %" />
              <Line yAxisId="right" type="monotone" dataKey="brake" stroke="#ff0088" strokeWidth={2} name="Brake %" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Temperature Monitoring */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <CardHeader>
            <CardTitle>Temperature Monitoring</CardTitle>
            <CardDescription className="text-gray-400">
              Oil and coolant temperature tracking
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={engineTelemetry}>
                <defs>
                  <linearGradient id="oilTempGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ff6600" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#ff6600" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="waterTempGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0088ff" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#0088ff" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
                <XAxis dataKey="time" stroke="#666" />
                <YAxis stroke="#666" domain={[85, 115]} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}
                  labelStyle={{ color: '#fff' }}
                />
                <Legend />
                <Area type="monotone" dataKey="oilTemp" stroke="#ff6600" fillOpacity={1} fill="url(#oilTempGradient)" name="Oil Temp (°C)" />
                <Area type="monotone" dataKey="waterTemp" stroke="#0088ff" fillOpacity={1} fill="url(#waterTempGradient)" name="Coolant Temp (°C)" />
              </AreaChart>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="border border-[#2a2a2a] rounded-lg p-3 bg-[rgba(255,255,255,0.02)]">
                <p className="text-xs text-gray-400 mb-1">Current Oil Temp</p>
                <div className="flex items-center gap-2">
                  <Thermometer className="w-4 h-4 text-[#ff6600]" />
                  <span className="text-2xl font-bold">112°C</span>
                </div>
                <Badge variant="outline" className="mt-2 text-green-500 border-green-500 text-xs">
                  Optimal Range
                </Badge>
              </div>
              <div className="border border-[#2a2a2a] rounded-lg p-3 bg-[rgba(255,255,255,0.02)]">
                <p className="text-xs text-gray-400 mb-1">Current Coolant</p>
                <div className="flex items-center gap-2">
                  <Thermometer className="w-4 h-4 text-[#0088ff]" />
                  <span className="text-2xl font-bold">102°C</span>
                </div>
                <Badge variant="outline" className="mt-2 text-green-500 border-green-500 text-xs">
                  Optimal Range
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <CardHeader>
            <CardTitle>Suspension Performance</CardTitle>
            <CardDescription className="text-gray-400">
              G-force, compression, and roll analysis by corner
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {suspensionData.map((data, idx) => (
                <div key={idx} className="border border-[#2a2a2a] rounded-lg p-4 bg-[rgba(255,255,255,0.02)]">
                  <h3 className="font-semibold mb-3">{data.corner}</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs text-gray-400">G-Force</p>
                      <p className="text-xl font-bold text-[#ff6600]">{data.gForce}G</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Roll Angle</p>
                      <p className="text-xl font-bold">{data.rollAngle}°</p>
                    </div>
                  </div>
                  <div className="mt-3 space-y-2">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-400">Compression</span>
                        <span>{data.compression}%</span>
                      </div>
                      <Progress value={data.compression} className="h-1" />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-400">Damping</span>
                        <span>{data.damping}%</span>
                      </div>
                      <Progress value={data.damping} className="h-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <CardContent className="pt-6">
            <div className="text-center">
              <Battery className="w-6 h-6 text-[#ff6600] mx-auto mb-2" />
              <p className="text-xs text-gray-400 mb-1">Fuel Level</p>
              <p className="text-2xl font-bold">68%</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <CardContent className="pt-6">
            <div className="text-center">
              <Wrench className="w-6 h-6 text-[#ff6600] mx-auto mb-2" />
              <p className="text-xs text-gray-400 mb-1">Oil Pressure</p>
              <p className="text-2xl font-bold">83 PSI</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <CardContent className="pt-6">
            <div className="text-center">
              <Gauge className="w-6 h-6 text-[#ff6600] mx-auto mb-2" />
              <p className="text-xs text-gray-400 mb-1">Peak RPM</p>
              <p className="text-2xl font-bold">7,900</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <CardContent className="pt-6">
            <div className="text-center">
              <Activity className="w-6 h-6 text-[#ff6600] mx-auto mb-2" />
              <p className="text-xs text-gray-400 mb-1">Max Speed</p>
              <p className="text-2xl font-bold">188 km/h</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
