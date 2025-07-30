import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { User, Mail, Calendar } from 'lucide-react';

const UserProfile: React.FC = () => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto mt-8">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
          <User className="w-8 h-8 text-blue-600" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            {currentUser.displayName || 'User'}
          </h2>
          <p className="text-gray-600">Welcome back!</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Mail className="w-5 h-5 text-gray-400" />
          <div>
            <p className="text-sm font-medium text-gray-500">Email</p>
            <p className="text-gray-900">{currentUser.email}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Calendar className="w-5 h-5 text-gray-400" />
          <div>
            <p className="text-sm font-medium text-gray-500">Member since</p>
            <p className="text-gray-900">
              {currentUser.metadata.creationTime 
                ? new Date(currentUser.metadata.creationTime).toLocaleDateString()
                : 'Recently'
              }
            </p>
          </div>
        </div>

        {currentUser.emailVerified && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            <p className="text-sm font-medium">✓ Email verified</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile; 