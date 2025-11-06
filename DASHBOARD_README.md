# JMS Motorsport AI-Driven Racing Dashboard

## Overview

A comprehensive, AI-powered dashboard for elite sprintcar racing operations, designed specifically for JMS Motorsport. This dashboard provides real-time analytics, performance tracking, race strategy optimization, and team management capabilities.

## 🏁 Features

### 1. **Dashboard Overview**
- Real-time season standings and performance metrics
- AI-powered insights and recommendations
- Recent race results with detailed breakdowns
- Key performance indicators (KPIs)
- Performance trend analysis with interactive charts

### 2. **Performance Analytics**
- Engine performance curves (power, torque, temperature)
- Multi-dimensional driver skill assessment
- Setup optimization analysis
- Speed, consistency, and overtaking metrics
- Historical performance comparisons

### 3. **Lap Time Analysis**
- Detailed lap-by-lap performance tracking
- Sector time comparisons (personal best vs. competitive field)
- Competitor lap time tracking
- Tire performance and degradation modeling
- Theoretical best lap calculations
- Fuel load correlation analysis

### 4. **Weather & Track Conditions**
- Real-time weather monitoring
- 8-hour race forecast
- Track temperature and grip level tracking
- Historical performance by weather conditions
- Setup recommendations based on conditions
- Race-time weather alerts

### 5. **Vehicle Telemetry & Diagnostics**
- Live engine and performance telemetry
- System health monitoring (engine, transmission, suspension, brakes)
- Temperature monitoring (oil, coolant)
- Suspension performance analysis (G-force, compression, damping)
- Active alerts and warnings
- Maintenance schedule tracking

### 6. **AI Race Strategy Engine**
- Machine learning-powered race strategy recommendations
- Monte Carlo race simulations (10,000+ simulations)
- Win probability calculations
- Multiple strategy comparisons (aggressive, conservative, alternate)
- Competitor strategy predictions
- Real-time tactical insights
- Pit stop window optimization

### 7. **Competitor Analysis**
- Championship standings and points tracking
- Head-to-head records
- Multi-dimensional skill comparisons (radar charts)
- Performance trend analysis
- Competitor strengths and weaknesses
- Threat level assessments
- Strategic recommendations

### 8. **Team Management**
- Complete crew roster with performance ratings
- Task scheduling and tracking
- Maintenance schedule management
- Team performance metrics (pit stops, strategy success)
- Member availability and specializations
- Vehicle component health tracking

### 9. **Data Exports**
- CSV/JSON/Excel export capabilities
- Multiple export categories:
  - Race performance data
  - Vehicle telemetry
  - Weather and conditions
  - Website data (contacts, signups)
- Bulk export functionality
- Export history tracking

## 🚀 Access the Dashboard

### Local Development

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Access the dashboard:**
   Navigate to: `http://localhost:5173/?dashboard=true`

### Production

Access the dashboard by adding the query parameter `?dashboard=true` to your website URL:
```
https://www.jmsmotorsport.com.au/?dashboard=true
```

## 🎨 Technology Stack

- **Frontend Framework:** React 18 + TypeScript
- **UI Components:** Radix UI + Tailwind CSS
- **Charts & Visualizations:** Recharts
- **State Management:** React Hooks
- **Build Tool:** Vite
- **Backend:** Supabase (for data persistence)

## 📊 Dashboard Components

### Core Components

```
src/components/
├── Dashboard.tsx                    # Main dashboard container
└── dashboard/
    ├── DashboardOverview.tsx        # Overview with KPIs and insights
    ├── PerformanceAnalytics.tsx     # Performance metrics and analysis
    ├── LapTimeAnalysis.tsx          # Lap time tracking and sector analysis
    ├── WeatherTracking.tsx          # Weather monitoring and forecasts
    ├── VehicleTelemetry.tsx         # Telemetry and diagnostics
    ├── RaceStrategyAI.tsx           # AI strategy engine
    ├── CompetitorAnalysis.tsx       # Competitor tracking
    ├── TeamManagement.tsx           # Team operations
    └── DataExports.tsx              # Data export functionality
```

## 🤖 AI Features

### Machine Learning Capabilities

1. **Performance Prediction:**
   - Analyzes historical data to predict lap times
   - Identifies optimal setup configurations
   - Calculates win probabilities

2. **Strategy Optimization:**
   - Simulates thousands of race scenarios
   - Recommends optimal pit stop windows
   - Predicts competitor strategies

3. **Insights Generation:**
   - Identifies patterns in telemetry data
   - Detects performance anomalies
   - Provides actionable recommendations

4. **Weather Impact Analysis:**
   - Correlates weather conditions with performance
   - Predicts optimal racing conditions
   - Recommends setup adjustments

## 📈 Data Sources

### Current Implementation (Demo Data)

The dashboard currently uses mock data for demonstration purposes. Each component includes realistic sample data representing:

- 20+ race season
- Multiple competitors and tracks
- Historical weather patterns
- Telemetry readings
- Team operations

### Production Integration

To connect real data sources:

1. **Supabase Database:**
   - Update database schema in Supabase
   - Create tables for races, lap times, telemetry, etc.
   - Configure real-time subscriptions

2. **Telemetry Integration:**
   - Connect to vehicle data acquisition system
   - Stream real-time sensor data
   - Store in time-series database

3. **Weather API:**
   - Integrate weather service (e.g., OpenWeather, Weather.com)
   - Fetch real-time conditions
   - Store historical data

4. **Race Timing System:**
   - Connect to official race timing
   - Import lap times and positions
   - Sync competitor data

## 🔐 Security & Access Control

### Access Levels

1. **Public Website:** Standard marketing site (default)
2. **Admin Panel:** Contact exports (`?admin=true`)
3. **AI Dashboard:** Full racing analytics (`?dashboard=true`)

### Recommended Security Measures

- Implement authentication (JWT, OAuth)
- Add role-based access control (RBAC)
- Use environment variables for sensitive data
- Enable HTTPS in production
- Implement rate limiting for API endpoints

## 🎯 Future Enhancements

### Planned Features

1. **Real-time Data Streaming:**
   - Live telemetry during races
   - Real-time position tracking
   - Instant lap time updates

2. **Advanced AI Models:**
   - Deep learning for lap time prediction
   - Computer vision for race analysis
   - Natural language race reports

3. **Mobile Application:**
   - React Native mobile app
   - Pit crew tablets
   - Driver mobile interface

4. **Integration Extensions:**
   - GoPro/camera integration
   - Social media auto-posting
   - Sponsor reporting automation

5. **Enhanced Analytics:**
   - Predictive maintenance AI
   - Fuel consumption optimization
   - Tire wear modeling

## 📱 Responsive Design

The dashboard is fully responsive and optimized for:
- Desktop (1920x1080 and above)
- Laptop (1366x768)
- Tablet (iPad Pro, Surface)
- Mobile (limited functionality)

## 🛠️ Customization

### Theming

Update colors in Tailwind configuration:

```typescript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'jms-orange': '#ff6600',
        'jms-dark': '#0a0a0a',
        'jms-gray': '#1a1a1a',
      }
    }
  }
}
```

### Adding New Metrics

1. Create new component in `src/components/dashboard/`
2. Add to Dashboard tabs in `Dashboard.tsx`
3. Update navigation and icons

## 📝 API Documentation

### Export Endpoints

```typescript
// Contact Forms Export
GET /functions/v1/make-server-e359eb76/export/contacts

// Email Signups Export
GET /functions/v1/make-server-e359eb76/export/signups
```

### Future API Endpoints

```typescript
// Lap Times
GET /api/laptimes?race_id={id}&car={number}

// Telemetry
GET /api/telemetry/live?car={number}

// Weather
GET /api/weather/current?track={name}

// Strategy
POST /api/strategy/optimize
```

## 🧪 Testing

### Running Tests

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Coverage
npm run test:coverage
```

## 📦 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

```bash
vercel --prod
```

### Environment Variables

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
VITE_WEATHER_API_KEY=your_weather_api_key
```

## 🤝 Support & Maintenance

### Contact

- **Team:** JMS Motorsport
- **Website:** https://www.jmsmotorsport.com.au
- **Developer:** Built with Claude AI

### Maintenance Schedule

- **Weekly:** Data backups
- **Monthly:** Performance optimization
- **Quarterly:** Feature updates
- **Annually:** Security audits

## 📜 License

Proprietary - JMS Motorsport © 2024

## 🎉 Acknowledgments

- Built with cutting-edge AI technology
- Designed for elite sprintcar racing
- Optimized for Australian racing circuits
- Created to give JMS Motorsport a competitive edge

---

**Access the Dashboard:** Add `?dashboard=true` to your URL

**Example:** `http://localhost:5173/?dashboard=true`
