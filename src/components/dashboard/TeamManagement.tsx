import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Progress } from '../ui/progress';
import { Users, UserCog, Wrench, Calendar, CheckCircle, Clock, AlertCircle } from 'lucide-react';

// Mock team data
const teamMembers = [
  {
    id: 1,
    name: 'Jake Morrison',
    role: 'Lead Driver',
    initials: 'JM',
    status: 'active',
    performance: 94,
    availability: 'Available',
    nextEvent: 'Valvoline Raceway',
    stats: { races: 20, wins: 9, podiums: 15 }
  },
  {
    id: 2,
    name: 'Tom Richards',
    role: 'Crew Chief',
    initials: 'TR',
    status: 'active',
    performance: 96,
    availability: 'Available',
    specialization: 'Setup & Strategy',
    experience: '15 years'
  },
  {
    id: 3,
    name: 'Sarah Chen',
    role: 'Lead Mechanic',
    initials: 'SC',
    status: 'active',
    performance: 92,
    availability: 'Available',
    specialization: 'Engine & Transmission',
    certifications: 5
  },
  {
    id: 4,
    name: 'Mike Anderson',
    role: 'Tire Specialist',
    initials: 'MA',
    status: 'active',
    performance: 88,
    availability: 'Available',
    specialization: 'Tire Management',
    experience: '8 years'
  },
  {
    id: 5,
    name: 'Lisa Martinez',
    role: 'Data Engineer',
    initials: 'LM',
    status: 'active',
    performance: 95,
    availability: 'Available',
    specialization: 'Telemetry & Analytics',
    certifications: 3
  },
  {
    id: 6,
    name: 'David Wilson',
    role: 'Spotter',
    initials: 'DW',
    status: 'active',
    performance: 90,
    availability: 'Available',
    specialization: 'Race Communication',
    experience: '10 years'
  }
];

const upcomingTasks = [
  { id: 1, task: 'Pre-race vehicle inspection', assignee: 'Sarah Chen', due: '2 hours', priority: 'high', status: 'in-progress' },
  { id: 2, task: 'Tire pressure check & adjustment', assignee: 'Mike Anderson', due: '3 hours', priority: 'high', status: 'pending' },
  { id: 3, task: 'Telemetry system calibration', assignee: 'Lisa Martinez', due: '4 hours', priority: 'medium', status: 'pending' },
  { id: 4, task: 'Race strategy briefing', assignee: 'Tom Richards', due: '5 hours', priority: 'high', status: 'pending' },
  { id: 5, task: 'Driver physical assessment', assignee: 'Jake Morrison', due: '6 hours', priority: 'medium', status: 'completed' },
  { id: 6, task: 'Fuel system check', assignee: 'Sarah Chen', due: '1 day', priority: 'medium', status: 'pending' },
];

const maintenanceSchedule = [
  { component: 'Engine', lastService: '2 days ago', nextService: '3 races', status: 'optimal', health: 98 },
  { component: 'Transmission', lastService: '5 days ago', nextService: '5 races', status: 'optimal', health: 96 },
  { component: 'Suspension', lastService: '1 day ago', nextService: '1 race', status: 'warning', health: 88 },
  { component: 'Brakes', lastService: '1 day ago', nextService: '2 races', status: 'optimal', health: 94 },
  { component: 'Tires', lastService: 'Current', nextService: '18 laps', status: 'optimal', health: 92 },
];

const teamPerformanceMetrics = [
  { metric: 'Pit Stop Avg Time', value: '4.2s', target: '4.0s', performance: 95 },
  { metric: 'Setup Changes/Race', value: '2.3', target: '< 3', performance: 92 },
  { metric: 'Mechanical DNFs', value: '0', target: '0', performance: 100 },
  { metric: 'Strategy Success Rate', value: '89%', target: '> 85%', performance: 96 },
];

export function TeamManagement() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
          Team Management
        </h2>
        <p className="text-gray-400">Crew roster, tasks, and operational coordination</p>
      </div>

      {/* Team Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Team Members</CardTitle>
            <Users className="w-4 h-4 text-[#ff6600]" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{teamMembers.length}</div>
            <p className="text-xs text-gray-500">{teamMembers.filter(m => m.status === 'active').length} active</p>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Avg Performance</CardTitle>
            <UserCog className="w-4 h-4 text-[#ff6600]" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#ff6600]">
              {Math.round(teamMembers.reduce((sum, m) => sum + m.performance, 0) / teamMembers.length)}%
            </div>
            <p className="text-xs text-gray-500">Excellent rating</p>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Active Tasks</CardTitle>
            <Clock className="w-4 h-4 text-[#ff6600]" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{upcomingTasks.filter(t => t.status !== 'completed').length}</div>
            <p className="text-xs text-gray-500">{upcomingTasks.filter(t => t.priority === 'high').length} high priority</p>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Vehicle Health</CardTitle>
            <Wrench className="w-4 h-4 text-[#ff6600]" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-500">
              {Math.round(maintenanceSchedule.reduce((sum, m) => sum + m.health, 0) / maintenanceSchedule.length)}%
            </div>
            <p className="text-xs text-gray-500">All systems go</p>
          </CardContent>
        </Card>
      </div>

      {/* Team Members */}
      <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
        <CardHeader>
          <CardTitle>Team Roster</CardTitle>
          <CardDescription className="text-gray-400">
            Current team members and their performance ratings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="border border-[#2a2a2a] rounded-lg p-4 bg-[rgba(255,255,255,0.02)]">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-12 h-12 bg-[#ff6600]">
                      <AvatarFallback className="bg-[#ff6600] text-white font-bold">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg">{member.name}</h3>
                      <p className="text-sm text-gray-400">{member.role}</p>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={
                      member.status === 'active'
                        ? 'text-green-500 border-green-500'
                        : 'text-gray-500 border-gray-500'
                    }
                  >
                    {member.status.toUpperCase()}
                  </Badge>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Performance Rating</span>
                      <span className="font-semibold">{member.performance}%</span>
                    </div>
                    <Progress value={member.performance} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-gray-400 text-xs">Availability</p>
                      <p className="font-semibold">{member.availability}</p>
                    </div>
                    {member.specialization && (
                      <div>
                        <p className="text-gray-400 text-xs">Specialization</p>
                        <p className="font-semibold text-xs">{member.specialization}</p>
                      </div>
                    )}
                    {member.experience && (
                      <div>
                        <p className="text-gray-400 text-xs">Experience</p>
                        <p className="font-semibold">{member.experience}</p>
                      </div>
                    )}
                    {member.certifications && (
                      <div>
                        <p className="text-gray-400 text-xs">Certifications</p>
                        <p className="font-semibold">{member.certifications}</p>
                      </div>
                    )}
                  </div>

                  {member.stats && (
                    <div className="pt-3 border-t border-[#2a2a2a]">
                      <div className="grid grid-cols-3 gap-2 text-center text-xs">
                        <div>
                          <p className="text-gray-400">Races</p>
                          <p className="font-bold text-lg">{member.stats.races}</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Wins</p>
                          <p className="font-bold text-lg text-[#ff6600]">{member.stats.wins}</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Podiums</p>
                          <p className="font-bold text-lg text-green-500">{member.stats.podiums}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Tasks */}
      <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#ff6600]" />
            Task Schedule
          </CardTitle>
          <CardDescription className="text-gray-400">
            Upcoming operational tasks and maintenance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {upcomingTasks.map((task) => (
              <div
                key={task.id}
                className={`border rounded-lg p-4 ${
                  task.status === 'completed'
                    ? 'border-green-500 bg-green-500/10'
                    : task.status === 'in-progress'
                    ? 'border-yellow-500 bg-yellow-500/10'
                    : 'border-[#2a2a2a] bg-[rgba(255,255,255,0.02)]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {task.status === 'completed' ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : task.status === 'in-progress' ? (
                        <Clock className="w-5 h-5 text-yellow-500 animate-pulse" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-gray-400" />
                      )}
                      <div className="flex-1">
                        <h3 className="font-semibold">{task.task}</h3>
                        <p className="text-sm text-gray-400">Assigned to: {task.assignee}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <Badge
                      variant="outline"
                      className={
                        task.priority === 'high'
                          ? 'text-red-500 border-red-500 mb-2'
                          : 'text-yellow-500 border-yellow-500 mb-2'
                      }
                    >
                      {task.priority.toUpperCase()}
                    </Badge>
                    <p className="text-xs text-gray-400">Due in {task.due}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Button className="w-full mt-4 bg-[#ff6600] hover:bg-[#ff7700] text-white">
            Add New Task
          </Button>
        </CardContent>
      </Card>

      {/* Team Performance Metrics */}
      <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
        <CardHeader>
          <CardTitle>Team Performance Metrics</CardTitle>
          <CardDescription className="text-gray-400">
            Key operational efficiency indicators
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {teamPerformanceMetrics.map((metric, idx) => (
              <div key={idx} className="border border-[#2a2a2a] rounded-lg p-4 bg-[rgba(255,255,255,0.02)]">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-lg">{metric.metric}</h3>
                    <p className="text-2xl font-bold text-[#ff6600] mt-1">{metric.value}</p>
                  </div>
                  <Badge
                    variant="outline"
                    className={
                      metric.performance >= 95
                        ? 'text-green-500 border-green-500'
                        : metric.performance >= 90
                        ? 'text-yellow-500 border-yellow-500'
                        : 'text-red-500 border-red-500'
                    }
                  >
                    {metric.performance}%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-2">Target: {metric.target}</p>
                  <Progress value={metric.performance} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Maintenance Schedule */}
      <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wrench className="w-5 h-5 text-[#ff6600]" />
            Maintenance Schedule
          </CardTitle>
          <CardDescription className="text-gray-400">
            Vehicle component service tracking
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {maintenanceSchedule.map((item, idx) => (
              <div key={idx} className="border border-[#2a2a2a] rounded-lg p-4 bg-[rgba(255,255,255,0.02)]">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg">{item.component}</h3>
                  <Badge
                    variant="outline"
                    className={
                      item.status === 'optimal'
                        ? 'text-green-500 border-green-500'
                        : item.status === 'warning'
                        ? 'text-yellow-500 border-yellow-500'
                        : 'text-red-500 border-red-500'
                    }
                  >
                    {item.status.toUpperCase()}
                  </Badge>
                </div>
                <div className="flex justify-between text-sm text-gray-400 mb-3">
                  <span>Last service: {item.lastService}</span>
                  <span>Next service: {item.nextService}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Progress value={item.health} className="h-2 flex-1" />
                  <span className="text-sm font-semibold w-12 text-right">{item.health}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
