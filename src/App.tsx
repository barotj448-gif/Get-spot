import React, { useState } from 'react';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { RoleSelectionScreen } from './screens/RoleSelectionScreen';
import { OtpScreen } from './screens/OtpScreen';
import { WorkerShopSetupScreen } from './screens/WorkerShopSetupScreen';
import { CustomerDiscoverScreen } from './screens/CustomerDiscoverScreen';
import { CustomerBookingScreen } from './screens/CustomerBookingScreen';
import { CustomerProfileScreen } from './screens/CustomerProfileScreen';
import { CustomerQueueTrackingScreen } from './screens/CustomerQueueTrackingScreen';
import { WorkerLiveQueueScreen } from './screens/WorkerLiveQueueScreen';
import { WorkerCompletedScreen } from './screens/WorkerCompletedScreen';
import { WorkerProfileScreen } from './screens/WorkerProfileScreen';

type Screen =
  | 'welcome'
  | 'role_selection'
  | 'otp'
  | 'worker_setup'
  | 'customer_app'
  | 'customer_tracking'
  | 'worker_app';

export const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [selectedRole, setSelectedRole] = useState<'customer' | 'worker'>('customer');
  const [customerTab, setCustomerTab] = useState<'discover' | 'booking' | 'profile'>('discover');
  const [workerTab, setWorkerTab] = useState<'queue' | 'completed' | 'profile'>('queue');
  const [trackingPreviousTab, setTrackingPreviousTab] = useState<'discover' | 'booking'>('discover');

  // Handlers for Onboarding Flow
  const handleWelcomeRoleSelect = (role: 'customer' | 'worker') => {
    setSelectedRole(role);
    setCurrentScreen('otp');
  };

  const handleGoToRoleSelection = () => {
    setCurrentScreen('role_selection');
  };

  const handleRoleSelectionContinue = (role: 'customer' | 'worker') => {
    setSelectedRole(role);
    setCurrentScreen('otp');
  };

  const handleOtpVerified = () => {
    if (selectedRole === 'customer') {
      setCustomerTab('discover');
      setCurrentScreen('customer_app');
    } else {
      setCurrentScreen('worker_setup');
    }
  };

  const handleWorkerSetupComplete = () => {
    setWorkerTab('queue');
    setCurrentScreen('worker_app');
  };

  const handleLogout = () => {
    setCurrentScreen('welcome');
    setCustomerTab('discover');
    setWorkerTab('queue');
  };

  // Tracking Live Queue
  const handleTrackQueue = () => {
    setTrackingPreviousTab(customerTab === 'booking' ? 'booking' : 'discover');
    setCurrentScreen('customer_tracking');
  };

  const handleBackFromTracking = () => {
    setCurrentScreen('customer_app');
    setCustomerTab(trackingPreviousTab);
  };

  // Render screens
  if (currentScreen === 'welcome') {
    return (
      <WelcomeScreen
        onGoToRoleSelection={handleGoToRoleSelection}
        onSelectRole={handleWelcomeRoleSelect}
      />
    );
  }

  if (currentScreen === 'role_selection') {
    return (
      <RoleSelectionScreen
        initialRole={selectedRole}
        onBack={() => setCurrentScreen('welcome')}
        onContinue={handleRoleSelectionContinue}
      />
    );
  }

  if (currentScreen === 'otp') {
    return (
      <OtpScreen
        role={selectedRole}
        onBack={() => setCurrentScreen('role_selection')}
        onVerify={handleOtpVerified}
      />
    );
  }

  if (currentScreen === 'worker_setup') {
    return (
      <WorkerShopSetupScreen
        onBack={() => setCurrentScreen('otp')}
        onFinish={handleWorkerSetupComplete}
      />
    );
  }

  if (currentScreen === 'customer_tracking') {
    return (
      <CustomerQueueTrackingScreen
        shopName="XYZ Luxury Salon & Spa"
        onBack={handleBackFromTracking}
      />
    );
  }

  // Customer Main App Screen (Discover | Booking | Profile)
  if (currentScreen === 'customer_app') {
    if (customerTab === 'discover') {
      return (
        <CustomerDiscoverScreen
          onNavigateTab={(tab) => setCustomerTab(tab)}
          onTrackQueue={handleTrackQueue}
        />
      );
    }
    if (customerTab === 'booking') {
      return (
        <CustomerBookingScreen
          onNavigateTab={(tab) => setCustomerTab(tab)}
          onTrackQueue={handleTrackQueue}
        />
      );
    }
    if (customerTab === 'profile') {
      return (
        <CustomerProfileScreen
          onLogout={handleLogout}
          onNavigateTab={(tab) => setCustomerTab(tab)}
        />
      );
    }
  }

  // Worker Main App Screen (Live Queue | Completed | Profile)
  if (currentScreen === 'worker_app') {
    if (workerTab === 'queue') {
      return (
        <WorkerLiveQueueScreen
          onNavigateTab={(tab) => setWorkerTab(tab)}
        />
      );
    }
    if (workerTab === 'completed') {
      return (
        <WorkerCompletedScreen
          onNavigateTab={(tab) => setWorkerTab(tab)}
        />
      );
    }
    if (workerTab === 'profile') {
      return (
        <WorkerProfileScreen
          onLogout={handleLogout}
          onNavigateTab={(tab) => setWorkerTab(tab)}
        />
      );
    }
  }

  return (
    <WelcomeScreen
      onGoToRoleSelection={handleGoToRoleSelection}
      onSelectRole={handleWelcomeRoleSelect}
    />
  );
};

export default App;
