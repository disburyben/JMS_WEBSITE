import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { DashboardOverview } from './dashboard/DashboardOverview';
import { PerformanceAnalytics } from './dashboard/PerformanceAnalytics';
import { LapTimeAnalysis } from './dashboard/LapTimeAnalysis';
import { WeatherTracking } from './dashboard/WeatherTracking';
import { VehicleTelemetry } from './dashboard/VehicleTelemetry';
import { RaceStrategyAI } from './dashboard/RaceStrategyAI';
import { CompetitorAnalysis } from './dashboard/CompetitorAnalysis';
import { TeamManagement } from './dashboard/TeamManagement';
import { DataExports } from './dashboard/DataExports';
import {
  LayoutDashboard,
  TrendingUp,
  Timer,
  Cloud,
  Gauge,
  Brain,
  Users,
  UserCog,
  Download
} from 'lucide-react';

export function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section className="bg-[#0a0a0a] text-white min-h-screen">
      <div className="max-w-[1600px] mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1
            className="text-5xl font-bold tracking-wider uppercase mb-2"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            JMS Motorsport AI Dashboard
          </h1>
          <p className="text-gray-400">
            Elite Sprintcar Racing Analytics & Intelligence Platform
          </p>
        </div>

        {/* Main Dashboard Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2 bg-[#1a1a1a] p-2 rounded-lg mb-6">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <LayoutDashboard className="w-4 h-4" />
              <span className="hidden md:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="performance" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span className="hidden md:inline">Performance</span>
            </TabsTrigger>
            <TabsTrigger value="laptimes" className="flex items-center gap-2">
              <Timer className="w-4 h-4" />
              <span className="hidden md:inline">Lap Times</span>
            </TabsTrigger>
            <TabsTrigger value="weather" className="flex items-center gap-2">
              <Cloud className="w-4 h-4" />
              <span className="hidden md:inline">Weather</span>
            </TabsTrigger>
            <TabsTrigger value="telemetry" className="flex items-center gap-2">
              <Gauge className="w-4 h-4" />
              <span className="hidden md:inline">Telemetry</span>
            </TabsTrigger>
            <TabsTrigger value="strategy" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              <span className="hidden md:inline">AI Strategy</span>
            </TabsTrigger>
            <TabsTrigger value="competitors" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span className="hidden md:inline">Competitors</span>
            </TabsTrigger>
            <TabsTrigger value="team" className="flex items-center gap-2">
              <UserCog className="w-4 h-4" />
              <span className="hidden md:inline">Team</span>
            </TabsTrigger>
            <TabsTrigger value="exports" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              <span className="hidden md:inline">Exports</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <DashboardOverview />
          </TabsContent>

          <TabsContent value="performance">
            <PerformanceAnalytics />
          </TabsContent>

          <TabsContent value="laptimes">
            <LapTimeAnalysis />
          </TabsContent>

          <TabsContent value="weather">
            <WeatherTracking />
          </TabsContent>

          <TabsContent value="telemetry">
            <VehicleTelemetry />
          </TabsContent>

          <TabsContent value="strategy">
            <RaceStrategyAI />
          </TabsContent>

          <TabsContent value="competitors">
            <CompetitorAnalysis />
          </TabsContent>

          <TabsContent value="team">
            <TeamManagement />
          </TabsContent>

          <TabsContent value="exports">
            <DataExports />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
