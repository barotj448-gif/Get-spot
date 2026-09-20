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

  const handleContinueFromRoleSelection = (selectedRole: 'customer' | 'worker') => {
    setRole(selectedRole);
    setCurrentScreen('otp');
  };

  const handleOtpVerify = () => {
    if (role === 'customer') {
      setCurrentScreen('customer-discover');
    } else {
      setCurrentScreen('worker-setup');
    }
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

  return (
    <div className="min-h-screen bg-white">
      {/* Active Screen Rendering */}
      {currentScreen === 'welcome' && (
        <WelcomeScreen
          onNext={() => setCurrentScreen('role-selection')}
          onGoToRoleSelection={() => setCurrentScreen('role-selection')}
        />
      )}

      {currentScreen === 'role-selection' && (
        <RoleSelectionScreen
          initialRole={role}
          onBack={() => setCurrentScreen('welcome')}
          onContinue={handleContinueFromRoleSelection}
        />
      )}

      {currentScreen === 'otp' && (
        <OtpScreen
          role={role}
          onBack={() => setCurrentScreen('role-selection')}
          onVerify={handleOtpVerify}
        />
      )}

      {currentScreen === 'customer-discover' && (
        <CustomerDiscoverScreen
          onNavigateTab={handleCustomerNavigateTab}
          onTrackQueue={() => setCurrentScreen('customer-tracking')}
        />
      )}

      {currentScreen === 'customer-booking' && (
        <CustomerBookingScreen
          onNavigateTab={handleCustomerNavigateTab}
          onTrackQueue={() => setCurrentScreen('customer-tracking')}
        />
      )}

      {currentScreen === 'customer-tracking' && (
        <CustomerQueueTrackingScreen
          onBack={() => setCurrentScreen(lastCustomerTab)}
        />
      )}

      {currentScreen === 'customer-profile' && (
        <CustomerProfileScreen
          onNavigateTab={handleCustomerNavigateTab}
          onLogout={handleLogout}
        />
      )}

      {currentScreen === 'worker-setup' && (
        <WorkerShopSetupScreen
          onBack={() => setCurrentScreen('otp')}
          onFinish={() => setCurrentScreen('worker-queue')}
        />
      )}

      {currentScreen === 'worker-queue' && (
        <WorkerLiveQueueScreen
          onNavigateTab={handleWorkerNavigateTab}
        />
      )}

      {currentScreen === 'worker-completed' && (
        <WorkerCompletedScreen
          onNavigateTab={handleWorkerNavigateTab}
        />
      )}

      {currentScreen === 'worker-profile' && (
        <WorkerProfileScreen
          onNavigateTab={handleWorkerNavigateTab}
          onLogout={handleLogout}
        />
      )}
    </div>
  );
};

export default App;
