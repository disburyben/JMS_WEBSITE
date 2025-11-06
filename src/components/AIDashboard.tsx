import { useState, useEffect } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import {
  TrendingUp,
  Brain,
  Users,
  Trophy,
  Target,
  MessageSquare,
  BarChart3,
  Activity,
  Zap,
  Calendar,
  AlertCircle,
  CheckCircle2,
  Clock,
  Gauge
} from 'lucide-react';

interface AIInsight {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  category: string;
  timestamp: string;
}

interface PerformanceMetric {
  label: string;
  value: string;
  change: number;
  trend: 'up' | 'down' | 'stable';
}

export function AIDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [insights, setInsights] = useState<AIInsight[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{role: string; message: string}[]>([]);

  useEffect(() => {
    // Generate initial AI insights
    generateInsights();
  }, []);

  const generateInsights = () => {
    // Simulated AI insights - in production, these would come from actual AI analysis
    const sampleInsights: AIInsight[] = [
      {
        id: '1',
        title: 'Race Performance Optimization',
        description: 'Based on historical data, adjusting tire pressure by 2 PSI could improve lap times by 0.3 seconds.',
        priority: 'high',
        category: 'performance',
        timestamp: new Date().toISOString()
      },
      {
        id: '2',
        title: 'Fan Engagement Trending Up',
        description: 'Social media engagement increased 45% this week. Consider posting more behind-the-scenes content.',
        priority: 'medium',
        category: 'engagement',
        timestamp: new Date().toISOString()
      },
      {
        id: '3',
        title: 'Competitor Analysis Alert',
        description: 'Top competitor improved qualifying times by 8%. Review their recent setup changes.',
        priority: 'high',
        category: 'competitor',
        timestamp: new Date().toISOString()
      },
      {
        id: '4',
        title: 'Sponsorship Opportunity',
        description: 'AI detected 3 potential sponsors in automotive sector showing interest in motorsports.',
        priority: 'medium',
        category: 'business',
        timestamp: new Date().toISOString()
      },
      {
        id: '5',
        title: 'Weather Impact Forecast',
        description: 'Next race has 70% rain probability. Recommend wet setup testing this week.',
        priority: 'high',
        category: 'strategy',
        timestamp: new Date().toISOString()
      }
    ];

    setInsights(sampleInsights);
    setIsLoading(false);
  };

  const performanceMetrics: PerformanceMetric[] = [
    { label: 'Avg Lap Time', value: '1:24.532', change: -2.3, trend: 'down' },
    { label: 'Top Speed', value: '267 km/h', change: 5.2, trend: 'up' },
    { label: 'Consistency Score', value: '94.2%', change: 3.1, trend: 'up' },
    { label: 'Position Gains', value: '+12', change: 8.0, trend: 'up' }
  ];

  const upcomingRaces = [
    { name: 'Silverstone Circuit', date: '2025-11-15', aiPrediction: 'P3-P5', confidence: 78 },
    { name: 'Spa-Francorchamps', date: '2025-11-22', aiPrediction: 'P2-P4', confidence: 82 },
    { name: 'Monza Circuit', date: '2025-11-29', aiPrediction: 'P4-P6', confidence: 75 }
  ];

  const handleSendChat = () => {
    if (!chatMessage.trim()) return;

    setChatHistory([...chatHistory,
      { role: 'user', message: chatMessage },
      {
        role: 'ai',
        message: 'Based on the data analysis, I recommend focusing on aerodynamic optimization for the upcoming race. Your current setup shows strong performance in high-speed corners but could benefit from improved downforce in technical sections.'
      }
    ]);
    setChatMessage('');
  };

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  const getPriorityBg = (priority: string) => {
    switch(priority) {
      case 'high': return 'bg-red-500/10 border-red-500/30';
      case 'medium': return 'bg-yellow-500/10 border-yellow-500/30';
      case 'low': return 'bg-green-500/10 border-green-500/30';
      default: return 'bg-gray-500/10 border-gray-500/30';
    }
  };

  return (
    <section className="bg-[#0a0a0a] text-white py-[50px] px-10 min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-[60px]">
          <h1
            className="text-center mb-[20px] tracking-[0.1em] uppercase relative pb-[30px]"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(2em, 5vw, 3.5em)',
            }}
          >
            <Brain className="inline-block mr-4 mb-2" size={48} />
            AI-Powered Dashboard
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80px] h-[3px] bg-[#ff6600]" />
          </h1>
          <p className="text-center opacity-70 text-lg">
            Intelligent insights and analytics for JMS Motorsport 88
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-[10px] mb-[40px] justify-center">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'performance', label: 'Performance', icon: Activity },
            { id: 'strategy', label: 'Race Strategy', icon: Target },
            { id: 'competitors', label: 'Competitors', icon: Trophy },
            { id: 'engagement', label: 'Fan Engagement', icon: Users },
            { id: 'chat', label: 'AI Assistant', icon: MessageSquare }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-[25px] py-[12px] text-[0.85em] tracking-[0.15em] font-bold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-[#ff6600] text-white'
                  : 'bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)]'
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-[40px]">
            {/* Key Performance Metrics */}
            <div>
              <h2 className="text-2xl font-bold mb-[20px] flex items-center gap-2">
                <Gauge className="text-[#ff6600]" />
                Key Performance Metrics
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
                {performanceMetrics.map((metric, idx) => (
                  <div key={idx} className="bg-[rgba(255,255,255,0.02)] border border-[#1a1a1a] p-[25px]">
                    <div className="text-[0.85em] opacity-70 uppercase tracking-[0.1em] mb-[10px]">
                      {metric.label}
                    </div>
                    <div className="text-[2.5em] font-black text-[#ff6600] mb-[5px]">
                      {metric.value}
                    </div>
                    <div className={`flex items-center gap-1 text-[0.9em] ${
                      metric.trend === 'up' ? 'text-green-500' : metric.trend === 'down' ? 'text-red-500' : 'text-gray-500'
                    }`}>
                      {metric.trend === 'up' ? '↑' : metric.trend === 'down' ? '↓' : '→'}
                      {Math.abs(metric.change)}% vs last race
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Insights */}
            <div>
              <h2 className="text-2xl font-bold mb-[20px] flex items-center gap-2">
                <Brain className="text-[#ff6600]" />
                AI-Generated Insights
              </h2>
              <div className="space-y-[15px]">
                {insights.map((insight) => (
                  <div
                    key={insight.id}
                    className={`border p-[25px] ${getPriorityBg(insight.priority)}`}
                  >
                    <div className="flex items-start justify-between mb-[10px]">
                      <h3 className="text-xl font-bold flex items-center gap-2">
                        <AlertCircle size={20} className={getPriorityColor(insight.priority)} />
                        {insight.title}
                      </h3>
                      <span className={`text-[0.75em] uppercase tracking-wider px-[12px] py-[4px] rounded ${getPriorityColor(insight.priority)}`}>
                        {insight.priority}
                      </span>
                    </div>
                    <p className="opacity-80 mb-[10px]">{insight.description}</p>
                    <div className="text-[0.8em] opacity-50">
                      Category: {insight.category} • {new Date(insight.timestamp).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Races Predictions */}
            <div>
              <h2 className="text-2xl font-bold mb-[20px] flex items-center gap-2">
                <Calendar className="text-[#ff6600]" />
                AI Race Predictions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
                {upcomingRaces.map((race, idx) => (
                  <div key={idx} className="bg-[rgba(255,255,255,0.02)] border border-[#1a1a1a] p-[25px]">
                    <div className="text-[1.2em] font-bold mb-[10px]">{race.name}</div>
                    <div className="text-[0.9em] opacity-70 mb-[15px]">
                      <Clock className="inline mr-2" size={14} />
                      {new Date(race.date).toLocaleDateString()}
                    </div>
                    <div className="bg-[#ff6600] bg-opacity-20 border border-[#ff6600] p-[15px] rounded">
                      <div className="text-[0.85em] opacity-70 uppercase mb-[5px]">Predicted Finish</div>
                      <div className="text-[2em] font-black text-[#ff6600]">{race.aiPrediction}</div>
                      <div className="text-[0.85em] opacity-70 mt-[5px]">
                        Confidence: {race.confidence}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Performance Tab */}
        {activeTab === 'performance' && (
          <div className="space-y-[40px]">
            <div>
              <h2 className="text-2xl font-bold mb-[20px] flex items-center gap-2">
                <Activity className="text-[#ff6600]" />
                Performance Analytics
              </h2>

              {/* Driver Performance */}
              <div className="bg-[rgba(255,255,255,0.02)] border border-[#1a1a1a] p-[30px] mb-[20px]">
                <h3 className="text-xl font-bold mb-[20px]">Driver Performance Analysis</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                  <div>
                    <div className="text-[0.9em] opacity-70 mb-[10px]">Qualifying Performance</div>
                    <div className="text-[2em] font-black text-[#ff6600] mb-[5px]">92.5%</div>
                    <div className="bg-[#1a1a1a] h-[8px] rounded-full overflow-hidden">
                      <div className="bg-[#ff6600] h-full" style={{width: '92.5%'}}></div>
                    </div>
                    <p className="text-[0.85em] opacity-60 mt-[10px]">
                      AI Analysis: Consistent improvement in sector 2. Focus on turn 7-9 complex for additional gains.
                    </p>
                  </div>
                  <div>
                    <div className="text-[0.9em] opacity-70 mb-[10px]">Race Pace Consistency</div>
                    <div className="text-[2em] font-black text-[#ff6600] mb-[5px]">88.3%</div>
                    <div className="bg-[#1a1a1a] h-[8px] rounded-full overflow-hidden">
                      <div className="bg-[#ff6600] h-full" style={{width: '88.3%'}}></div>
                    </div>
                    <p className="text-[0.85em] opacity-60 mt-[10px]">
                      AI Analysis: Tire degradation management excellent. Consider more aggressive early-race strategy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vehicle Performance */}
              <div className="bg-[rgba(255,255,255,0.02)] border border-[#1a1a1a] p-[30px]">
                <h3 className="text-xl font-bold mb-[20px]">Vehicle Performance Metrics</h3>
                <div className="space-y-[20px]">
                  {[
                    { metric: 'Aerodynamic Efficiency', value: 85, recommendation: 'Optimize front wing angle by 2 degrees' },
                    { metric: 'Power Unit Performance', value: 92, recommendation: 'Running optimally, maintain current settings' },
                    { metric: 'Brake Performance', value: 78, recommendation: 'Consider upgrading brake cooling for hot circuits' },
                    { metric: 'Tire Management', value: 95, recommendation: 'Excellent performance, current strategy working well' }
                  ].map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-[8px]">
                        <span className="text-[0.95em]">{item.metric}</span>
                        <span className="text-[#ff6600] font-bold">{item.value}%</span>
                      </div>
                      <div className="bg-[#1a1a1a] h-[6px] rounded-full overflow-hidden mb-[8px]">
                        <div className="bg-gradient-to-r from-[#ff6600] to-[#ff8800] h-full" style={{width: `${item.value}%`}}></div>
                      </div>
                      <p className="text-[0.8em] opacity-60">
                        <Zap size={12} className="inline mr-1" />
                        AI Recommendation: {item.recommendation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Race Strategy Tab */}
        {activeTab === 'strategy' && (
          <div className="space-y-[40px]">
            <h2 className="text-2xl font-bold mb-[20px] flex items-center gap-2">
              <Target className="text-[#ff6600]" />
              AI Race Strategy Insights
            </h2>

            {/* Pit Stop Strategy */}
            <div className="bg-[rgba(255,255,255,0.02)] border border-[#1a1a1a] p-[30px]">
              <h3 className="text-xl font-bold mb-[20px]">Optimal Pit Stop Strategy</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] mb-[20px]">
                {[
                  { stop: 1, lap: '18-20', tires: 'Medium → Soft', duration: '2.8s' },
                  { stop: 2, lap: '38-40', tires: 'Soft → Medium', duration: '2.9s' },
                  { stop: 3, lap: '55-57', tires: 'Medium → Soft', duration: '2.8s' }
                ].map((pit, idx) => (
                  <div key={idx} className="bg-[#1a1a1a] p-[20px] rounded">
                    <div className="text-[1.5em] font-bold text-[#ff6600] mb-[10px]">Stop {pit.stop}</div>
                    <div className="text-[0.9em] space-y-[5px]">
                      <div>Lap: <span className="text-[#ff6600]">{pit.lap}</span></div>
                      <div>Tires: <span className="text-[#ff6600]">{pit.tires}</span></div>
                      <div>Duration: <span className="text-[#ff6600]">{pit.duration}</span></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-[#ff6600] bg-opacity-10 border border-[#ff6600] p-[20px] rounded">
                <CheckCircle2 className="inline mr-2 text-[#ff6600]" />
                <strong>AI Recommendation:</strong> This 3-stop strategy provides optimal tire performance while minimizing time loss. Alternative 2-stop available if safety cars occur.
              </div>
            </div>

            {/* Weather Impact */}
            <div className="bg-[rgba(255,255,255,0.02)] border border-[#1a1a1a] p-[30px]">
              <h3 className="text-xl font-bold mb-[20px]">Weather Impact Analysis</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                <div>
                  <div className="text-[0.9em] opacity-70 mb-[10px]">Rain Probability</div>
                  <div className="text-[3em] font-black text-[#ff6600]">35%</div>
                  <p className="text-[0.85em] opacity-70">Peak probability during laps 25-40</p>
                </div>
                <div>
                  <div className="text-[0.9em] opacity-70 mb-[10px]">Track Temperature</div>
                  <div className="text-[3em] font-black text-[#ff6600]">42°C</div>
                  <p className="text-[0.85em] opacity-70">Higher than optimal for soft compound</p>
                </div>
              </div>
              <div className="mt-[20px] bg-yellow-500 bg-opacity-10 border border-yellow-500 p-[20px] rounded">
                <AlertCircle className="inline mr-2 text-yellow-500" />
                <strong>AI Alert:</strong> Have intermediate tires ready. If rain occurs, pit immediately for competitive advantage.
              </div>
            </div>
          </div>
        )}

        {/* Competitors Tab */}
        {activeTab === 'competitors' && (
          <div className="space-y-[40px]">
            <h2 className="text-2xl font-bold mb-[20px] flex items-center gap-2">
              <Trophy className="text-[#ff6600]" />
              Competitor Analysis
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
              {[
                {
                  team: 'Racing Team Alpha',
                  position: 2,
                  gap: '-0.8s',
                  strengths: ['Qualifying pace', 'Aerodynamics'],
                  weaknesses: ['Tire management', 'Wet conditions'],
                  threat: 'high'
                },
                {
                  team: 'Velocity Motorsport',
                  position: 4,
                  gap: '+1.2s',
                  strengths: ['Race pace', 'Strategy'],
                  weaknesses: ['Power unit', 'High-speed corners'],
                  threat: 'medium'
                },
                {
                  team: 'Thunder Racing',
                  position: 6,
                  gap: '+2.5s',
                  strengths: ['Consistency', 'Reliability'],
                  weaknesses: ['Qualifying', 'Overtaking'],
                  threat: 'low'
                },
                {
                  team: 'Apex Performance',
                  position: 8,
                  gap: '+3.8s',
                  strengths: ['Development rate', 'Pit stops'],
                  weaknesses: ['Overall pace', 'Driver experience'],
                  threat: 'low'
                }
              ].map((competitor, idx) => (
                <div key={idx} className="bg-[rgba(255,255,255,0.02)] border border-[#1a1a1a] p-[25px]">
                  <div className="flex justify-between items-start mb-[15px]">
                    <div>
                      <h3 className="text-xl font-bold">{competitor.team}</h3>
                      <div className="text-[0.9em] opacity-70">Position: P{competitor.position}</div>
                    </div>
                    <div className={`px-[12px] py-[6px] rounded text-[0.75em] uppercase ${
                      competitor.threat === 'high' ? 'bg-red-500/20 text-red-500' :
                      competitor.threat === 'medium' ? 'bg-yellow-500/20 text-yellow-500' :
                      'bg-green-500/20 text-green-500'
                    }`}>
                      {competitor.threat} threat
                    </div>
                  </div>
                  <div className="text-[2em] font-black text-[#ff6600] mb-[15px]">
                    {competitor.gap}
                  </div>
                  <div className="space-y-[10px]">
                    <div>
                      <div className="text-[0.85em] opacity-70 mb-[5px]">Strengths:</div>
                      <div className="flex flex-wrap gap-[5px]">
                        {competitor.strengths.map((s, i) => (
                          <span key={i} className="bg-green-500/20 text-green-500 px-[10px] py-[4px] rounded text-[0.8em]">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-[0.85em] opacity-70 mb-[5px]">Weaknesses:</div>
                      <div className="flex flex-wrap gap-[5px]">
                        {competitor.weaknesses.map((w, i) => (
                          <span key={i} className="bg-red-500/20 text-red-500 px-[10px] py-[4px] rounded text-[0.8em]">
                            {w}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Fan Engagement Tab */}
        {activeTab === 'engagement' && (
          <div className="space-y-[40px]">
            <h2 className="text-2xl font-bold mb-[20px] flex items-center gap-2">
              <Users className="text-[#ff6600]" />
              Fan Engagement Analytics
            </h2>

            {/* Social Media Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-[20px]">
              {[
                { platform: 'Instagram', followers: '45.2K', growth: '+12.5%', engagement: '8.3%' },
                { platform: 'Twitter', followers: '32.8K', growth: '+8.2%', engagement: '6.1%' },
                { platform: 'Facebook', followers: '28.5K', growth: '+5.7%', engagement: '4.9%' },
                { platform: 'TikTok', followers: '52.1K', growth: '+22.3%', engagement: '12.7%' }
              ].map((social, idx) => (
                <div key={idx} className="bg-[rgba(255,255,255,0.02)] border border-[#1a1a1a] p-[20px]">
                  <div className="text-[1.2em] font-bold mb-[10px]">{social.platform}</div>
                  <div className="text-[2em] font-black text-[#ff6600]">{social.followers}</div>
                  <div className="text-[0.85em] text-green-500 mb-[5px]">↑ {social.growth}</div>
                  <div className="text-[0.8em] opacity-70">Engagement: {social.engagement}</div>
                </div>
              ))}
            </div>

            {/* AI Content Recommendations */}
            <div className="bg-[rgba(255,255,255,0.02)] border border-[#1a1a1a] p-[30px]">
              <h3 className="text-xl font-bold mb-[20px]">AI Content Recommendations</h3>
              <div className="space-y-[15px]">
                {[
                  {
                    type: 'Behind-the-Scenes',
                    score: 95,
                    description: 'Pit crew preparation videos generate 3x more engagement than race highlights',
                    action: 'Post 2-3 times per week'
                  },
                  {
                    type: 'Driver Q&A',
                    score: 88,
                    description: 'Live Q&A sessions increase follower retention by 45%',
                    action: 'Schedule weekly sessions'
                  },
                  {
                    type: 'Technical Deep Dives',
                    score: 82,
                    description: 'Car setup explanations attract highly engaged audience',
                    action: 'Create monthly series'
                  },
                  {
                    type: 'Race Day Stories',
                    score: 91,
                    description: 'Real-time race updates drive immediate engagement spikes',
                    action: 'Post every 10-15 laps'
                  }
                ].map((rec, idx) => (
                  <div key={idx} className="bg-[#1a1a1a] p-[20px] rounded">
                    <div className="flex justify-between items-start mb-[10px]">
                      <h4 className="text-lg font-bold">{rec.type}</h4>
                      <div className="text-[#ff6600] font-bold">Score: {rec.score}</div>
                    </div>
                    <p className="text-[0.9em] opacity-70 mb-[10px]">{rec.description}</p>
                    <div className="text-[0.85em] text-[#ff6600]">
                      <Zap size={14} className="inline mr-1" />
                      {rec.action}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sentiment Analysis */}
            <div className="bg-[rgba(255,255,255,0.02)] border border-[#1a1a1a] p-[30px]">
              <h3 className="text-xl font-bold mb-[20px]">Fan Sentiment Analysis</h3>
              <div className="grid grid-cols-3 gap-[20px]">
                <div className="text-center">
                  <div className="text-[3em] font-black text-green-500">68%</div>
                  <div className="text-[0.9em] opacity-70">Positive</div>
                </div>
                <div className="text-center">
                  <div className="text-[3em] font-black text-gray-500">24%</div>
                  <div className="text-[0.9em] opacity-70">Neutral</div>
                </div>
                <div className="text-center">
                  <div className="text-[3em] font-black text-red-500">8%</div>
                  <div className="text-[0.9em] opacity-70">Negative</div>
                </div>
              </div>
              <div className="mt-[20px] bg-green-500 bg-opacity-10 border border-green-500 p-[20px] rounded">
                <CheckCircle2 className="inline mr-2 text-green-500" />
                <strong>AI Analysis:</strong> Overall sentiment is very positive. Fans particularly appreciate transparency and race day updates.
              </div>
            </div>
          </div>
        )}

        {/* AI Chat Assistant Tab */}
        {activeTab === 'chat' && (
          <div className="space-y-[20px]">
            <h2 className="text-2xl font-bold mb-[20px] flex items-center gap-2">
              <MessageSquare className="text-[#ff6600]" />
              AI Assistant
            </h2>

            <div className="bg-[rgba(255,255,255,0.02)] border border-[#1a1a1a] p-[30px]">
              <p className="opacity-70 mb-[20px]">
                Ask me anything about team performance, race strategy, competitor analysis, or fan engagement.
              </p>

              {/* Chat History */}
              <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-[20px] rounded mb-[20px] min-h-[400px] max-h-[500px] overflow-y-auto">
                {chatHistory.length === 0 ? (
                  <div className="text-center opacity-50 mt-[100px]">
                    <Brain size={48} className="mx-auto mb-4 text-[#ff6600]" />
                    <p>Start a conversation with the AI assistant</p>
                    <p className="text-sm mt-2">Try asking: "What should we focus on for the next race?"</p>
                  </div>
                ) : (
                  <div className="space-y-[15px]">
                    {chatHistory.map((msg, idx) => (
                      <div key={idx} className={`${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                        <div className={`inline-block max-w-[80%] p-[15px] rounded ${
                          msg.role === 'user'
                            ? 'bg-[#ff6600] text-white'
                            : 'bg-[rgba(255,255,255,0.05)] border border-[#1a1a1a]'
                        }`}>
                          {msg.role === 'ai' && <Brain size={16} className="inline mr-2 text-[#ff6600]" />}
                          {msg.message}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <div className="flex gap-[10px]">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendChat()}
                  placeholder="Ask the AI assistant..."
                  className="flex-1 bg-[#1a1a1a] border border-[#2a2a2a] px-[20px] py-[15px] text-white placeholder-gray-500 focus:outline-none focus:border-[#ff6600]"
                />
                <button
                  onClick={handleSendChat}
                  className="bg-[#ff6600] text-white px-[30px] py-[15px] font-bold hover:bg-[#ff7700] transition-colors"
                >
                  Send
                </button>
              </div>

              {/* Quick Questions */}
              <div className="mt-[20px]">
                <div className="text-[0.85em] opacity-70 mb-[10px]">Quick Questions:</div>
                <div className="flex flex-wrap gap-[10px]">
                  {[
                    'Analyze last race performance',
                    'Suggest improvements',
                    'Compare with competitors',
                    'Next race strategy'
                  ].map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => setChatMessage(q)}
                      className="bg-[#1a1a1a] hover:bg-[#2a2a2a] px-[15px] py-[8px] text-[0.85em] rounded transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
