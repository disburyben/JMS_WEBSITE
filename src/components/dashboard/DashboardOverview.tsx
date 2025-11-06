import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { TrendingUp, TrendingDown, Award, Clock, Zap, Target, AlertCircle, CheckCircle } from 'lucide-react';

// Mock data - in production this would come from your backend/Supabase
const performanceData = [
  { date: '2024-01', avgLapTime: 12.45, position: 3, points: 68 },
  { date: '2024-02', avgLapTime: 12.32, position: 2, points: 78 },
  { date: '2024-03', avgLapTime: 12.28, position: 1, points: 95 },
  { date: '2024-04', avgLapTime: 12.15, position: 1, points: 98 },
  { date: '2024-05', avgLapTime: 12.08, position: 1, points: 100 },
  { date: '2024-06', avgLapTime: 12.12, position: 2, points: 87 },
];

const recentRaces = [
  { track: 'Valvoline Raceway', date: '2024-06-15', position: 2, lapTime: '12.08s', points: 87 },
  { track: 'Premier Speedway', date: '2024-06-08', position: 1, lapTime: '12.15s', points: 100 },
  { track: 'Toowoomba Speedway', date: '2024-06-01', position: 1, lapTime: '12.12s', points: 98 },
  { track: 'Archerfield Speedway', date: '2024-05-25', position: 3, lapTime: '12.28s', points: 78 },
];

const aiInsights = [
  {
    type: 'success',
    title: 'Lap Time Improvement',
    description: 'Average lap times improved by 2.8% over the last 6 races',
    confidence: 94
  },
  {
    type: 'warning',
    title: 'Tire Wear Pattern',
    description: 'AI detected increased tire degradation in Turn 3 under high load',
    confidence: 87
  },
  {
    type: 'info',
    title: 'Optimal Setup Found',
    description: 'Current wing angle and suspension settings showing 15% performance gain',
    confidence: 92
  },
  {
    type: 'success',
    title: 'Weather Advantage',
    description: 'Team performs 12% better in warm, dry conditions (23-28°C)',
    confidence: 89
  }
];

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Season Position</CardTitle>
            <Award className="w-4 h-4 text-[#ff6600]" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">2nd</div>
            <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
              <TrendingUp className="w-3 h-3 text-green-500" />
              +1 position from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Best Lap Time</CardTitle>
            <Clock className="w-4 h-4 text-[#ff6600]" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12.08s</div>
            <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
              <TrendingDown className="w-3 h-3 text-green-500" />
              -0.37s improvement
            </p>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Total Points</CardTitle>
            <Target className="w-4 h-4 text-[#ff6600]" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">526</div>
            <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
              <TrendingUp className="w-3 h-3 text-green-500" />
              87 points from last race
            </p>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Win Rate</CardTitle>
            <Zap className="w-4 h-4 text-[#ff6600]" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">45%</div>
            <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
              <TrendingUp className="w-3 h-3 text-green-500" />
              9 wins out of 20 races
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Performance Trend */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <CardHeader>
            <CardTitle>Performance Trend</CardTitle>
            <CardDescription className="text-gray-400">
              6-month lap time and position analysis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="lapTimeGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ff6600" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#ff6600" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
                <XAxis dataKey="date" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}
                  labelStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="avgLapTime" stroke="#ff6600" fillOpacity={1} fill="url(#lapTimeGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <CardHeader>
            <CardTitle>Points Progression</CardTitle>
            <CardDescription className="text-gray-400">
              Championship points by race
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
                <XAxis dataKey="date" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}
                  labelStyle={{ color: '#fff' }}
                />
                <Bar dataKey="points" fill="#ff6600" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* AI Insights */}
      <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#ff6600] rounded-full animate-pulse"></span>
            AI-Powered Insights
          </CardTitle>
          <CardDescription className="text-gray-400">
            Real-time analysis and recommendations from machine learning models
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aiInsights.map((insight, idx) => (
              <div
                key={idx}
                className="border border-[#2a2a2a] rounded-lg p-4 bg-[rgba(255,255,255,0.02)]"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {insight.type === 'success' && <CheckCircle className="w-5 h-5 text-green-500" />}
                    {insight.type === 'warning' && <AlertCircle className="w-5 h-5 text-yellow-500" />}
                    {insight.type === 'info' && <TrendingUp className="w-5 h-5 text-blue-500" />}
                    <h3 className="font-semibold">{insight.title}</h3>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {insight.confidence}% confidence
                  </Badge>
                </div>
                <p className="text-sm text-gray-400">{insight.description}</p>
                <div className="mt-3">
                  <Progress value={insight.confidence} className="h-1" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Races */}
      <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
        <CardHeader>
          <CardTitle>Recent Race Results</CardTitle>
          <CardDescription className="text-gray-400">
            Last 4 race performances
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentRaces.map((race, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 border border-[#2a2a2a] rounded-lg bg-[rgba(255,255,255,0.02)]"
              >
                <div className="flex-1">
                  <h3 className="font-semibold">{race.track}</h3>
                  <p className="text-sm text-gray-400">{race.date}</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-xs text-gray-400">Position</p>
                    <p className="text-xl font-bold text-[#ff6600]">{race.position}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-400">Best Lap</p>
                    <p className="text-lg font-semibold">{race.lapTime}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-400">Points</p>
                    <p className="text-lg font-semibold">{race.points}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
