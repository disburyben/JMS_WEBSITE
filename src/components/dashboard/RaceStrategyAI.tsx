import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { Brain, Target, TrendingUp, AlertCircle, CheckCircle, Zap, Trophy, Clock } from 'lucide-react';

// Mock AI strategy data
const currentStrategy = {
  recommendation: 'Aggressive Early Push',
  confidence: 94,
  expectedPosition: 1,
  riskLevel: 'medium',
  fuelStrategy: 'Full Tank Start',
  tireStrategy: 'Hard Compound',
  pitWindow: 'Laps 18-22',
  keyFactors: [
    'Current track temperature favors hard compound tires',
    'Weather stable for next 3 hours - no rain expected',
    'Main competitor (#23) weak in sector 2',
    'Your best lap times in laps 5-8 window'
  ]
};

const strategyOptions = [
  {
    name: 'Aggressive Early Push',
    winProbability: 48,
    podiumProbability: 82,
    riskLevel: 'medium',
    confidence: 94,
    pros: ['Capitalize on strong early pace', 'Put pressure on competitors', 'Control race from front'],
    cons: ['Higher tire wear', 'Increased fuel consumption', 'Risk of early incident'],
    recommended: true
  },
  {
    name: 'Conservative Start & Late Charge',
    winProbability: 35,
    podiumProbability: 88,
    riskLevel: 'low',
    confidence: 87,
    pros: ['Preserve tires for late race', 'Lower fuel consumption', 'Safer strategy'],
    cons: ['Risk getting caught in traffic', 'May lose track position', 'Dependent on others\' mistakes'],
    recommended: false
  },
  {
    name: 'Alternate Tire Strategy',
    winProbability: 42,
    podiumProbability: 75,
    riskLevel: 'high',
    confidence: 72,
    pros: ['Potential undercut advantage', 'Different wear profile', 'Strategic flexibility'],
    cons: ['Untested at this track', 'Competitor response unknown', 'Risky if weather changes'],
    recommended: false
  }
];

const raceSimulations = {
  totalSimulations: 10000,
  scenarios: [
    { position: 1, probability: 48, avgLapTime: '12.08', points: 100 },
    { position: 2, probability: 34, avgLapTime: '12.15', points: 87 },
    { position: 3, probability: 12, avgLapTime: '12.22', points: 78 },
    { position: 4, probability: 4, avgLapTime: '12.28', points: 70 },
    { position: 5, probability: 2, avgLapTime: '12.35', points: 63 },
  ]
};

const competitorStrategies = [
  { car: '#23', driver: 'Smith Racing', predictedStrategy: 'Aggressive', winProbability: 38, threat: 'high' },
  { car: '#14', driver: 'Wilson Motorsport', predictedStrategy: 'Conservative', winProbability: 22, threat: 'medium' },
  { car: '#31', driver: 'Taylor Racing', predictedStrategy: 'Alternate Tire', winProbability: 18, threat: 'medium' },
  { car: '#45', driver: 'Brown Speedway', predictedStrategy: 'Unknown', winProbability: 12, threat: 'low' },
];

const aiInsights = [
  {
    title: 'Optimal Overtaking Zones',
    description: 'AI analysis shows Turn 2 and Turn 4 offer highest overtaking success probability (76%) based on your driving style.',
    confidence: 91,
    icon: Target
  },
  {
    title: 'Fuel Management',
    description: 'Current consumption rate sustainable. Can maintain aggressive pace for 15 laps before needing to conserve.',
    confidence: 88,
    icon: Zap
  },
  {
    title: 'Traffic Management',
    description: 'Backmarker traffic predicted laps 12-14. AI recommends early push to avoid traffic window.',
    confidence: 85,
    icon: AlertCircle
  },
  {
    title: 'Weather Window',
    description: 'Optimal racing conditions for next 2.5 hours. 15% chance of light rain after that.',
    confidence: 82,
    icon: CheckCircle
  }
];

export function RaceStrategyAI() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold mb-1 flex items-center gap-2" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            <Brain className="w-7 h-7 text-[#ff6600]" />
            AI Race Strategy Engine
          </h2>
          <p className="text-gray-400">Machine learning-powered race strategy optimization</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#ff6600] rounded-full animate-pulse"></span>
          <span className="text-sm text-gray-400">AI Model Active</span>
        </div>
      </div>

      {/* Current Recommended Strategy */}
      <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#2a1a1a] border-[#ff6600] border-2 text-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Trophy className="w-6 h-6 text-[#ff6600]" />
              Recommended Strategy
            </CardTitle>
            <Badge className="bg-[#ff6600] text-white text-lg px-4 py-1">
              {currentStrategy.confidence}% Confidence
            </Badge>
          </div>
          <CardDescription className="text-gray-300 text-lg mt-2">
            {currentStrategy.recommendation}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-[rgba(255,102,0,0.1)] border border-[#ff6600] rounded-lg p-4">
              <p className="text-xs text-gray-400 mb-1">Expected Position</p>
              <p className="text-3xl font-bold text-[#ff6600]">{currentStrategy.expectedPosition}st</p>
            </div>
            <div className="bg-[rgba(255,102,0,0.1)] border border-[#ff6600] rounded-lg p-4">
              <p className="text-xs text-gray-400 mb-1">Risk Level</p>
              <Badge variant="outline" className="text-yellow-500 border-yellow-500 mt-1">
                {currentStrategy.riskLevel.toUpperCase()}
              </Badge>
            </div>
            <div className="bg-[rgba(255,102,0,0.1)] border border-[#ff6600] rounded-lg p-4">
              <p className="text-xs text-gray-400 mb-1">Tire Strategy</p>
              <p className="text-lg font-semibold">{currentStrategy.tireStrategy}</p>
            </div>
            <div className="bg-[rgba(255,102,0,0.1)] border border-[#ff6600] rounded-lg p-4">
              <p className="text-xs text-gray-400 mb-1">Pit Window</p>
              <p className="text-lg font-semibold">{currentStrategy.pitWindow}</p>
            </div>
          </div>

          <div className="space-y-2 mb-4">
            <h3 className="font-semibold text-lg">Key Strategic Factors:</h3>
            {currentStrategy.keyFactors.map((factor, idx) => (
              <div key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{factor}</span>
              </div>
            ))}
          </div>

          <Button className="w-full bg-[#ff6600] hover:bg-[#ff7700] text-white font-bold">
            Apply This Strategy
          </Button>
        </CardContent>
      </Card>

      {/* All Strategy Options */}
      <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
        <CardHeader>
          <CardTitle>Strategy Comparison</CardTitle>
          <CardDescription className="text-gray-400">
            AI-analyzed race strategies with win probability calculations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {strategyOptions.map((strategy, idx) => (
              <div
                key={idx}
                className={`border rounded-lg p-4 ${
                  strategy.recommended
                    ? 'border-[#ff6600] bg-[rgba(255,102,0,0.05)]'
                    : 'border-[#2a2a2a] bg-[rgba(255,255,255,0.02)]'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-lg">{strategy.name}</h3>
                      {strategy.recommended && (
                        <Badge className="bg-[#ff6600] text-white">RECOMMENDED</Badge>
                      )}
                    </div>
                    <div className="flex gap-4 mb-3">
                      <div>
                        <p className="text-xs text-gray-400">Win Probability</p>
                        <p className="text-2xl font-bold text-[#ff6600]">{strategy.winProbability}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Podium Probability</p>
                        <p className="text-2xl font-bold text-green-500">{strategy.podiumProbability}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Risk Level</p>
                        <Badge
                          variant="outline"
                          className={
                            strategy.riskLevel === 'low' ? 'text-green-500 border-green-500' :
                            strategy.riskLevel === 'medium' ? 'text-yellow-500 border-yellow-500' :
                            'text-red-500 border-red-500'
                          }
                        >
                          {strategy.riskLevel.toUpperCase()}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400 mb-1">AI Confidence</p>
                    <p className="text-xl font-bold">{strategy.confidence}%</p>
                    <Progress value={strategy.confidence} className="h-1 w-20 mt-2" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-green-500 mb-2">Advantages:</h4>
                    <ul className="space-y-1">
                      {strategy.pros.map((pro, pidx) => (
                        <li key={pidx} className="text-xs text-gray-300 flex items-start gap-2">
                          <span className="text-green-500">+</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-red-500 mb-2">Risks:</h4>
                    <ul className="space-y-1">
                      {strategy.cons.map((con, cidx) => (
                        <li key={cidx} className="text-xs text-gray-300 flex items-start gap-2">
                          <span className="text-red-500">−</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Race Simulation Results */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <CardHeader>
            <CardTitle>Monte Carlo Race Simulation</CardTitle>
            <CardDescription className="text-gray-400">
              {raceSimulations.totalSimulations.toLocaleString()} race simulations analyzed
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {raceSimulations.scenarios.map((scenario, idx) => (
                <div key={idx} className="border border-[#2a2a2a] rounded-lg p-3 bg-[rgba(255,255,255,0.02)]">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[rgba(255,102,0,0.2)] flex items-center justify-center">
                        <span className="text-xl font-bold text-[#ff6600]">{scenario.position}</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold">P{scenario.position}</p>
                        <p className="text-xs text-gray-400">{scenario.points} points</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-[#ff6600]">{scenario.probability}%</p>
                      <p className="text-xs text-gray-400">probability</p>
                    </div>
                  </div>
                  <Progress value={scenario.probability} className="h-2" />
                  <p className="text-xs text-gray-400 mt-2">Avg Lap Time: {scenario.avgLapTime}s</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <CardHeader>
            <CardTitle>Competitor Strategy Analysis</CardTitle>
            <CardDescription className="text-gray-400">
              AI-predicted strategies and threat assessment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {competitorStrategies.map((comp, idx) => (
                <div key={idx} className="border border-[#2a2a2a] rounded-lg p-4 bg-[rgba(255,255,255,0.02)]">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-[#ff6600]">{comp.car}</span>
                        <span className="text-sm text-gray-400">{comp.driver}</span>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">
                        Strategy: <span className="text-white">{comp.predictedStrategy}</span>
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        comp.threat === 'high' ? 'text-red-500 border-red-500' :
                        comp.threat === 'medium' ? 'text-yellow-500 border-yellow-500' :
                        'text-green-500 border-green-500'
                      }
                    >
                      {comp.threat.toUpperCase()} THREAT
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-xs text-gray-400">Win Probability:</p>
                    <p className="text-lg font-bold">{comp.winProbability}%</p>
                  </div>
                  <Progress value={comp.winProbability} className="h-1 mt-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Insights */}
      <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-[#ff6600]" />
            Real-Time AI Insights
          </CardTitle>
          <CardDescription className="text-gray-400">
            Dynamic race analysis and recommendations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aiInsights.map((insight, idx) => {
              const Icon = insight.icon;
              return (
                <div key={idx} className="border border-[#2a2a2a] rounded-lg p-4 bg-[rgba(255,255,255,0.02)]">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[rgba(255,102,0,0.2)] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#ff6600]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{insight.title}</h3>
                        <Badge variant="outline" className="text-xs">
                          {insight.confidence}%
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-400">{insight.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
