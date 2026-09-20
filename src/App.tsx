import React, { useState } from 'react';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { RoleSelectionScreen } from './screens/RoleSelectionScreen';
import { OtpScreen } from './screens/OtpScreen';
import { CustomerDiscoverScreen } from './screens/CustomerDiscoverScreen';
import { CustomerBookingScreen } from './screens/CustomerBookingScreen';
import { CustomerQueueTrackingScreen } from './screens/CustomerQueueTrackingScreen';
import { CustomerProfileScreen } from './screens/CustomerProfileScreen';
import { WorkerShopSetupScreen } from './screens/WorkerShopSetupScreen';
import { WorkerLiveQueueScreen } from './screens/WorkerLiveQueueScreen';
import { WorkerCompletedScreen } from './screens/WorkerCompletedScreen';
import { WorkerProfileScreen } from './screens/WorkerProfileScreen';

export type Screen =
  | 'welcome'
  | 'role-selection'
  | 'otp'
  | 'customer-discover'
  | 'customer-booking'
  | 'customer-tracking'
  | 'customer-profile'
  | 'worker-setup'
  | 'worker-queue'
  | 'worker-completed'
  | 'worker-profile';

export const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [role, setRole] = useState<'customer' | 'worker'>('customer');
  const [lastCustomerTab, setLastCustomerTab] = useState<Screen>('customer-discover');

  const [previousScreen, setPreviousScreen] = useState<Screen | null>(null);

  const navigateTo = (nextScreen: Screen) => {
    setPreviousScreen(currentScreen);
    setCurrentScreen(nextScreen);
  };

  const handleContinueFromRoleSelection = (selectedRole: 'customer' | 'worker') => {
    setRole(selectedRole);
    navigateTo('otp');
  };

  const handleOtpVerify = () => {
    navigateTo(role === 'customer' ? 'customer-discover' : 'worker-setup');
  };

  const handleCustomerNavigateTab = (tab: 'discover' | 'booking' | 'profile') => {
    if (tab === 'discover') {
      setCurrentScreen('customer-discover');
      setLastCustomerTab('customer-discover');
    } else if (tab === 'booking') {
      setCurrentScreen('customer-booking');
      setLastCustomerTab('customer-booking');
    } else if (tab === 'profile') {
      setCurrentScreen('customer-profile');
      setLastCustomerTab('customer-profile');
    }
  };

  const handleWorkerNavigateTab = (tab: 'queue' | 'completed' | 'profile') => {
    if (tab === 'queue') {
      setCurrentScreen('worker-queue');
    } else if (tab === 'completed') {
      setCurrentScreen('worker-completed');
    } else if (tab === 'profile') {
      setCurrentScreen('worker-profile');
    }
  };

  const handleLogout = () => {
    setRole('customer');
    setCurrentScreen('welcome');
  };

  const renderScreen = (screen: Screen) => {
    switch (screen) {
      case 'welcome':
        return <WelcomeScreen onNext={() => navigateTo('role-selection')} onGoToRoleSelection={() => navigateTo('role-selection')} />;
      case 'role-selection':
        return <RoleSelectionScreen initialRole={role} onBack={() => navigateTo('welcome')} onContinue={handleContinueFromRoleSelection} />;
      case 'otp':
        return <OtpScreen role={role} onBack={() => navigateTo('role-selection')} onVerify={handleOtpVerify} />;
      case 'customer-discover':
        return <CustomerDiscoverScreen onNavigateTab={handleCustomerNavigateTab} onTrackQueue={() => navigateTo('customer-tracking')} />;
      case 'customer-booking':
        return <CustomerBookingScreen onNavigateTab={handleCustomerNavigateTab} onTrackQueue={() => navigateTo('customer-tracking')} />;
      case 'customer-tracking':
        return <CustomerQueueTrackingScreen onBack={() => navigateTo(lastCustomerTab)} />;
      case 'customer-profile':
        return <CustomerProfileScreen onNavigateTab={handleCustomerNavigateTab} onLogout={handleLogout} />;
      case 'worker-setup':
        return <WorkerShopSetupScreen onBack={() => navigateTo('otp')} onFinish={() => navigateTo('worker-queue')} />;
      case 'worker-queue':
        return <WorkerLiveQueueScreen onNavigateTab={handleWorkerNavigateTab} />;
      case 'worker-completed':
        return <WorkerCompletedScreen onNavigateTab={handleWorkerNavigateTab} />;
      case 'worker-profile':
        return <WorkerProfileScreen onNavigateTab={handleWorkerNavigateTab} onLogout={handleLogout} />;
    }
  };

  const isAuthFlow = ['welcome', 'role-selection', 'otp'].includes(currentScreen);
  const showLayeredAuth = isAuthFlow && previousScreen && ['welcome', 'role-selection', 'otp'].includes(previousScreen);

  return (
    <div className={showLayeredAuth ? 'auth-stage' : 'min-h-screen bg-white'}>
      {showLayeredAuth && <div className="auth-background" aria-hidden="true">{renderScreen(previousScreen)}</div>}
      <div className={showLayeredAuth ? 'auth-foreground' : undefined}>{renderScreen(currentScreen)}</div>
    </div>
  );
};

export default App;
