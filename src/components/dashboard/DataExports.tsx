import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Download, FileText, Table, Calendar, Database, Filter } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { projectId, publicAnonKey } from '../../utils/supabase/info';

export function DataExports() {
  const handleExportContacts = async () => {
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-e359eb76/export/contacts`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );

      if (!response.ok) {
        if (response.status === 404) {
          alert('No contact submissions found');
          return;
        }
        throw new Error('Failed to export contacts');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'contact-submissions.csv';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error exporting contacts:', error);
      alert('Failed to export contacts. Check the console for details.');
    }
  };

  const handleExportSignups = async () => {
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-e359eb76/export/signups`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );

      if (!response.ok) {
        if (response.status === 404) {
          alert('No email signups found');
          return;
        }
        throw new Error('Failed to export signups');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'email-signups.csv';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error exporting signups:', error);
      alert('Failed to export signups. Check the console for details.');
    }
  };

  // Mock export functions for dashboard data
  const handleExportLapTimes = () => {
    // In production, this would fetch real data
    const csvContent = `Lap,Time,Sector1,Sector2,Sector3,FuelLoad\n1,12.85,3.2,4.5,5.15,95\n2,12.42,3.1,4.3,5.02,90\n3,12.28,3.08,4.25,4.95,85`;
    downloadCSV('lap-times.csv', csvContent);
  };

  const handleExportTelemetry = () => {
    const csvContent = `Time,RPM,Throttle,Brake,Speed,OilTemp,WaterTemp\n0,3500,45,0,85,92,88\n1,5200,78,0,125,94,89\n2,7100,95,0,168,98,92`;
    downloadCSV('telemetry-data.csv', csvContent);
  };

  const handleExportWeather = () => {
    const csvContent = `Time,Temperature,Humidity,WindSpeed,RainChance,TrackTemp\n14:00,24,45,12,5,32\n15:00,25,48,14,10,34\n16:00,26,52,15,15,35`;
    downloadCSV('weather-data.csv', csvContent);
  };

  const handleExportPerformance = () => {
    const csvContent = `Date,AvgLapTime,Position,Points\n2024-01,12.45,3,68\n2024-02,12.32,2,78\n2024-03,12.28,1,95`;
    downloadCSV('performance-data.csv', csvContent);
  };

  const downloadCSV = (filename: string, content: string) => {
    const blob = new Blob([content], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const exportCategories = [
    {
      title: 'Race Performance Data',
      description: 'Lap times, positions, and race results',
      icon: Table,
      exports: [
        { name: 'Lap Time Analysis', action: handleExportLapTimes, format: 'CSV', size: '~50KB' },
        { name: 'Performance Summary', action: handleExportPerformance, format: 'CSV', size: '~25KB' },
        { name: 'Season Statistics', action: () => downloadCSV('season-stats.csv', 'Season,Wins,Podiums,Points\n2024,9,15,526'), format: 'CSV', size: '~15KB' }
      ]
    },
    {
      title: 'Vehicle Telemetry',
      description: 'Engine, sensors, and system data',
      icon: Database,
      exports: [
        { name: 'Telemetry Stream', action: handleExportTelemetry, format: 'CSV', size: '~200KB' },
        { name: 'Engine Performance', action: () => downloadCSV('engine-data.csv', 'RPM,Torque,Power,Temp\n2000,520,480,85'), format: 'CSV', size: '~100KB' },
        { name: 'Suspension Data', action: () => downloadCSV('suspension-data.csv', 'Corner,GForce,Compression,Damping\nTurn1,3.2,68,72'), format: 'CSV', size: '~75KB' }
      ]
    },
    {
      title: 'Weather & Conditions',
      description: 'Track and weather analytics',
      icon: Calendar,
      exports: [
        { name: 'Weather History', action: handleExportWeather, format: 'CSV', size: '~30KB' },
        { name: 'Track Conditions Log', action: () => downloadCSV('track-conditions.csv', 'Date,Surface,Grip,Temperature\n2024-06-15,Dry,92,34'), format: 'CSV', size: '~20KB' }
      ]
    },
    {
      title: 'Website Data',
      description: 'Contact forms and email signups',
      icon: FileText,
      exports: [
        { name: 'Contact Submissions', action: handleExportContacts, format: 'CSV', size: 'Variable' },
        { name: 'Email Signups', action: handleExportSignups, format: 'CSV', size: 'Variable' }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            Data Exports
          </h2>
          <p className="text-gray-400">Export dashboard data and analytics in various formats</p>
        </div>
        <div className="flex gap-3">
          <Select defaultValue="csv">
            <SelectTrigger className="w-[150px] bg-[#1a1a1a] border-[#2a2a2a]">
              <SelectValue placeholder="Format" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a1a1a] border-[#2a2a2a]">
              <SelectItem value="csv">CSV</SelectItem>
              <SelectItem value="json">JSON</SelectItem>
              <SelectItem value="xlsx">Excel</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all-time">
            <SelectTrigger className="w-[180px] bg-[#1a1a1a] border-[#2a2a2a]">
              <SelectValue placeholder="Time range" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a1a1a] border-[#2a2a2a]">
              <SelectItem value="last-race">Last Race</SelectItem>
              <SelectItem value="last-5">Last 5 Races</SelectItem>
              <SelectItem value="season">Current Season</SelectItem>
              <SelectItem value="all-time">All Time</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Quick Export Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Available Datasets</CardTitle>
            <Database className="w-4 h-4 text-[#ff6600]" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12</div>
            <p className="text-xs text-gray-500">Ready for export</p>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Total Records</CardTitle>
            <Table className="w-4 h-4 text-[#ff6600]" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">15,432</div>
            <p className="text-xs text-gray-500">Across all datasets</p>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Last Export</CardTitle>
            <Calendar className="w-4 h-4 text-[#ff6600]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2 days ago</div>
            <p className="text-xs text-gray-500">Lap time data</p>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Export Count</CardTitle>
            <Download className="w-4 h-4 text-[#ff6600]" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">47</div>
            <p className="text-xs text-gray-500">This season</p>
          </CardContent>
        </Card>
      </div>

      {/* Export Categories */}
      {exportCategories.map((category, idx) => {
        const Icon = category.icon;
        return (
          <Card key={idx} className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon className="w-5 h-5 text-[#ff6600]" />
                {category.title}
              </CardTitle>
              <CardDescription className="text-gray-400">
                {category.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.exports.map((exp, expIdx) => (
                  <div
                    key={expIdx}
                    className="border border-[#2a2a2a] rounded-lg p-4 bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.05)] transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold mb-1">{exp.name}</h3>
                        <div className="flex gap-2">
                          <Badge variant="outline" className="text-xs">
                            {exp.format}
                          </Badge>
                          <Badge variant="outline" className="text-xs text-gray-400">
                            {exp.size}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <Button
                      onClick={exp.action}
                      className="w-full bg-[#ff6600] hover:bg-[#ff7700] text-white"
                      size="sm"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );
      })}

      {/* Bulk Export */}
      <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#2a1a1a] border-[#ff6600] border-2 text-white">
        <CardHeader>
          <CardTitle className="text-xl">Bulk Data Export</CardTitle>
          <CardDescription className="text-gray-300">
            Export all dashboard data in a single comprehensive package
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-gray-400 mb-2">Package includes:</p>
              <ul className="text-sm space-y-1 text-gray-300">
                <li>• All performance and lap time data</li>
                <li>• Complete telemetry records</li>
                <li>• Weather and track condition logs</li>
                <li>• Team and competitor analysis</li>
                <li>• Contact forms and email signups</li>
              </ul>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400 mb-1">Estimated size</p>
              <p className="text-3xl font-bold text-[#ff6600]">~2.5 MB</p>
            </div>
          </div>
          <Button className="w-full bg-[#ff6600] hover:bg-[#ff7700] text-white font-bold py-6 text-lg">
            <Download className="w-5 h-5 mr-2" />
            Export Complete Dashboard Archive
          </Button>
        </CardContent>
      </Card>

      {/* Export Info */}
      <Card className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#ff6600]" />
            Export Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm text-gray-300">
            <div className="flex items-start gap-2">
              <span className="text-[#ff6600]">•</span>
              <p>All exports are generated in real-time from the latest available data</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#ff6600]">•</span>
              <p>CSV files can be opened in Excel, Google Sheets, or any spreadsheet application</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#ff6600]">•</span>
              <p>Export history is logged for audit and compliance purposes</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#ff6600]">•</span>
              <p>Data is automatically anonymized where required for privacy compliance</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#ff6600]">•</span>
              <p>Bulk exports may take 30-60 seconds to generate depending on data volume</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
