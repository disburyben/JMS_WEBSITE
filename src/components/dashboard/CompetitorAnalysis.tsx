import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Badge } from '../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Users, TrendingUp, Target, AlertCircle } from 'lucide-react';

// Mock competitor data
const competitors = [
  {
    id: 1,
    car: '#23',
    driver: 'Mike Smith',
    team: 'Smith Racing',
    points: 548,
    position: 1,
    wins: 11,
    podiums: 16,
    avgLapTime: 12.12,
    avgPosition: 1.8,
    threat: 'high',
    strengths: ['Consistency', 'Wet weather'],
    weaknesses: ['Sector 2 performance', 'Tire management']
  },
  {
    id: 2,
    car: '#88',
    driver: 'You',
    team: 'JMS Motorsport',
    points: 526,
    position: 2,
    wins: 9,
    podiums: 15,
    avgLapTime: 12.15,
    avgPosition: 2.1,
    threat: 'self',
    strengths: ['Acceleration', 'Overtaking'],
    weaknesses: ['Weather adaptation', 'Early race pace']
  },
  {
    id: 3,
    car: '#14',
    driver: 'Sarah Wilson',
    team: 'Wilson Motorsport',
    points: 487,
    position: 3,
    wins: 7,
    podiums: 13,
    avgLapTime: 12.22,
    avgPosition: 2.8,
    threat: 'medium',
    strengths: ['Qualifying pace', 'Cornering'],
    weaknesses: ['Race starts', 'Overtaking']
  },
  {
    id: 4,
    car: '#31',
    driver: 'James Taylor',
    team: 'Taylor Racing',
    points: 412,
    position: 4,
    wins: 4,
    podiums: 10,
    avgLapTime: 12.35,
    avgPosition: 3.5,
    threat: 'low',
    strengths: ['Fuel strategy', 'Tire preservation'],
    weaknesses: ['Qualifying', 'Raw pace']
  }
];

const performanceComparison = [
  { race: 'Race 1', car88: 2, car23: 1, car14: 3, car31: 5 },
  { race: 'Race 2', car88: 1, car23: 2, car14: 4, car31: 3 },
  { race: 'Race 3', car88: 1, car23: 3, car14: 2, car31: 6 },
  { race: 'Race 4', car88: 3, car23: 1, car14: 2, car31: 4 },
  { race: 'Race 5', car88: 1, car23: 2, car14: 3, car31: 5 },
  { race: 'Race 6', car88: 2, car23: 1, car14: 4, car31: 3 },
];

const skillComparison = [
  { skill: 'Qualifying', car88: 88, car23: 92, car14: 94, car31: 78 },
  { skill: 'Race Pace', car88: 90, car23: 92, car14: 85, car31: 80 },
  { skill: 'Overtaking', car88: 90, car23: 82, car14: 75, car31: 72 },
  { skill: 'Consistency', car88: 94, car23: 96, car14: 88, car31: 85 },
  { skill: 'Tire Mgmt', car88: 85, car23: 88, car14: 90, car31: 92 },
  { skill: 'Wet Weather', car88: 82, car23: 90, car14: 86, car31: 80 },
];

const headToHead = [
  { competitor: 'Smith Racing #23', races: 20, wins: 9, losses: 11, draws: 0, winRate: 45 },
  { competitor: 'Wilson Motorsport #14', races: 20, wins: 14, losses: 6, draws: 0, winRate: 70 },
  { competitor: 'Taylor Racing #31', races: 20, wins: 17, losses: 3, draws: 0, winRate: 85 },
];

export function CompetitorAnalysis() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            Competitor Analysis
          </h2>
          <p className="text-gray-400">Comprehensive competitor tracking and performance comparison</p>
        </div>
        <Select defaultValue="top-4">
          <SelectTrigger className="w-[200px] bg-[#1a1a1a] border-[#2a2a2a]">
            <SelectValue placeholder="Select group" />
          </SelectTrigger>
          <SelectContent className="bg-[#1a1a1a] border-[#2a2a2a]">
            <SelectItem value="top-4">Top 4 Competitors</SelectItem>
            <SelectItem value="top-10">Top 10</SelectItem>
            <SelectItem value="all">All Competitors</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Championship Standings */}
      <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
        <CardHeader>
          <CardTitle>Championship Standings</CardTitle>
          <CardDescription className="text-gray-400">
            Current season points and performance metrics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {competitors.map((comp) => (
              <div
                key={comp.id}
                className={`border rounded-lg p-4 ${
                  comp.threat === 'self'
                    ? 'border-[#ff6600] bg-[rgba(255,102,0,0.05)]'
                    : 'border-[#2a2a2a] bg-[rgba(255,255,255,0.02)]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[rgba(255,102,0,0.2)] flex items-center justify-center">
                      <span className="text-xl font-bold text-[#ff6600]">{comp.position}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold">{comp.car}</span>
                        <span className="text-lg">{comp.driver}</span>
                        {comp.threat === 'self' && (
                          <Badge className="bg-[#ff6600] text-white">YOU</Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-400">{comp.team}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-[#ff6600]">{comp.points}</p>
                    <p className="text-xs text-gray-400">points</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400">Wins</p>
                    <p className="text-xl font-bold">{comp.wins}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Podiums</p>
                    <p className="text-xl font-bold">{comp.podiums}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Avg Lap</p>
                    <p className="text-xl font-bold">{comp.avgLapTime}s</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Avg Position</p>
                    <p className="text-xl font-bold">{comp.avgPosition}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Threat Level</p>
                    {comp.threat !== 'self' && (
                      <Badge
                        variant="outline"
                        className={
                          comp.threat === 'high' ? 'text-red-500 border-red-500' :
                          comp.threat === 'medium' ? 'text-yellow-500 border-yellow-500' :
                          'text-green-500 border-green-500'
                        }
                      >
                        {comp.threat.toUpperCase()}
                      </Badge>
                    )}
                  </div>
                </div>

                {comp.threat !== 'self' && (
                  <div className="mt-4 pt-4 border-t border-[#2a2a2a] grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs text-green-500 font-semibold mb-1">Strengths:</p>
                      <p className="text-sm text-gray-300">{comp.strengths.join(', ')}</p>
                    </div>
                    <div>
                      <p className="text-xs text-red-500 font-semibold mb-1">Weaknesses:</p>
                      <p className="text-sm text-gray-300">{comp.weaknesses.join(', ')}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Trends */}
      <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
        <CardHeader>
          <CardTitle>Position Trends - Last 6 Races</CardTitle>
          <CardDescription className="text-gray-400">
            Race-by-race position comparison with top competitors
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={performanceComparison}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
              <XAxis dataKey="race" stroke="#666" />
              <YAxis stroke="#666" reversed domain={[1, 6]} />
              <Tooltip
                contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}
                labelStyle={{ color: '#fff' }}
              />
              <Legend />
              <Line type="monotone" dataKey="car88" stroke="#ff6600" strokeWidth={3} name="Car #88 (You)" />
              <Line type="monotone" dataKey="car23" stroke="#ff0066" strokeWidth={2} name="Car #23" />
              <Line type="monotone" dataKey="car14" stroke="#00ff88" strokeWidth={2} name="Car #14" />
              <Line type="monotone" dataKey="car31" stroke="#0088ff" strokeWidth={2} name="Car #31" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Skills Radar Comparison */}
      <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
        <CardHeader>
          <CardTitle>Skill Set Comparison</CardTitle>
          <CardDescription className="text-gray-400">
            Multi-dimensional performance analysis across key racing skills
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={450}>
            <RadarChart data={skillComparison}>
              <PolarGrid stroke="#2a2a2a" />
              <PolarAngleAxis dataKey="skill" stroke="#666" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#666" />
              <Radar name="Car #88 (You)" dataKey="car88" stroke="#ff6600" fill="#ff6600" fillOpacity={0.6} />
              <Radar name="Car #23" dataKey="car23" stroke="#ff0066" fill="#ff0066" fillOpacity={0.3} />
              <Radar name="Car #14" dataKey="car14" stroke="#00ff88" fill="#00ff88" fillOpacity={0.3} />
              <Radar name="Car #31" dataKey="car31" stroke="#0088ff" fill="#0088ff" fillOpacity={0.3} />
              <Tooltip
                contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}
                labelStyle={{ color: '#fff' }}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>

          <div className="mt-4 p-4 bg-[rgba(255,102,0,0.1)] border border-[#ff6600] rounded-lg">
            <p className="text-sm">
              <span className="font-semibold text-[#ff6600]">AI Analysis:</span> Your overtaking and consistency are strong advantages. Focus on improving wet weather performance and qualifying pace to challenge for championship leader position.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Head-to-Head Records */}
      <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
        <CardHeader>
          <CardTitle>Head-to-Head Records</CardTitle>
          <CardDescription className="text-gray-400">
            Your direct competition results vs. top rivals this season
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {headToHead.map((h2h, idx) => (
              <div key={idx} className="border border-[#2a2a2a] rounded-lg p-4 bg-[rgba(255,255,255,0.02)]">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-lg">{h2h.competitor}</h3>
                  <Badge variant="outline" className="text-gray-400">
                    {h2h.races} races
                  </Badge>
                </div>
                <div className="grid grid-cols-4 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-400">Wins</p>
                    <p className="text-2xl font-bold text-green-500">{h2h.wins}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Losses</p>
                    <p className="text-2xl font-bold text-red-500">{h2h.losses}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Draws</p>
                    <p className="text-2xl font-bold text-gray-400">{h2h.draws}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Win Rate</p>
                    <p className="text-2xl font-bold text-[#ff6600]">{h2h.winRate}%</p>
                  </div>
                </div>
                <div className="h-3 bg-[#2a2a2a] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 via-[#ff6600] to-red-500"
                    style={{ width: `${h2h.winRate}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Competitive Insights */}
      <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-[#ff6600]" />
            AI Competitive Insights
          </CardTitle>
          <CardDescription className="text-gray-400">
            Strategic recommendations based on competitor analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-[#2a2a2a] rounded-lg p-4 bg-[rgba(255,255,255,0.02)]">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Championship Gap Analysis</h3>
                  <p className="text-sm text-gray-400 mb-2">
                    You're 22 points behind leader (#23). Need average P1.5 finish in remaining 8 races to overtake, assuming leader maintains current performance.
                  </p>
                  <Badge variant="outline" className="text-yellow-500 border-yellow-500">
                    Action Required
                  </Badge>
                </div>
              </div>
            </div>

            <div className="border border-[#2a2a2a] rounded-lg p-4 bg-[rgba(255,255,255,0.02)]">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Opportunity Window</h3>
                  <p className="text-sm text-gray-400 mb-2">
                    Next 3 tracks favor your driving style. Historical data shows 68% win rate on similar track configurations.
                  </p>
                  <Badge variant="outline" className="text-green-500 border-green-500">
                    High Confidence
                  </Badge>
                </div>
              </div>
            </div>

            <div className="border border-[#2a2a2a] rounded-lg p-4 bg-[rgba(255,255,255,0.02)]">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-[#ff6600] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Focus Area</h3>
                  <p className="text-sm text-gray-400 mb-2">
                    Car #23's weakness in Sector 2 can be exploited. Average 0.15s advantage in this sector - use for overtaking.
                  </p>
                  <Badge variant="outline" className="text-[#ff6600] border-[#ff6600]">
                    Strategic Advantage
                  </Badge>
                </div>
              </div>
            </div>

            <div className="border border-[#2a2a2a] rounded-lg p-4 bg-[rgba(255,255,255,0.02)]">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Team Dynamics</h3>
                  <p className="text-sm text-gray-400 mb-2">
                    Car #14 struggling with race starts. Position yourself P2-P3 on grid to capitalize on their weakness.
                  </p>
                  <Badge variant="outline" className="text-blue-500 border-blue-500">
                    Tactical Edge
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
