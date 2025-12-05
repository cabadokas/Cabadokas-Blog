import React from 'react';
import { PRIVACY_POLICY_TEXT } from '../constants';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 animate-fade-in">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white border-b pb-4 border-gray-200 dark:border-gray-700">
        Privacy Policy for Cabadokas (Blog & App)
      </h1>
      <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 whitespace-pre-wrap leading-relaxed">
        {PRIVACY_POLICY_TEXT}
      </div>
      <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h3 className="font-bold mb-2">Contact Us</h3>
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="border-b border-gray-300 dark:border-gray-600">
              <th className="py-2">Name</th>
              <th className="py-2">Email</th>
              <th className="py-2">Subject</th>
              <th className="py-2">Send To</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">Visitor</td>
              <td className="py-2">visitor@example.com</td>
              <td className="py-2">Privacy Inquiry</td>
              <td className="py-2 text-pink-600">cabadokas@zohomail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PrivacyPolicy;