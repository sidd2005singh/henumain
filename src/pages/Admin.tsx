import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  ShoppingBag, 
  FileText, 
  MessageSquare, 
  BarChart3, 
  Settings,
  Eye,
  Edit,
  Trash2,
  Plus,
  Filter,
  Search,
  Download,
  Mail,
  Calendar
} from 'lucide-react';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');

  const adminTabs = [
    { id: 'dashboard', name: 'Dashboard', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'users', name: 'Users', icon: <Users className="w-5 h-5" /> },
    { id: 'orders', name: 'Store Orders', icon: <ShoppingBag className="w-5 h-5" /> },
    { id: 'blog', name: 'Blog Posts', icon: <FileText className="w-5 h-5" /> },
    { id: 'feedback', name: 'Feedback', icon: <MessageSquare className="w-5 h-5" /> },
    { id: 'settings', name: 'Settings', icon: <Settings className="w-5 h-5" /> }
  ];

  const dashboardStats = [
    { label: 'Total Users', value: '15,247', change: '+12%', icon: <Users className="w-6 h-6" /> },
    { label: 'Active Downloads', value: '2,847', change: '+8%', icon: <Download className="w-6 h-6" /> },
    { label: 'Store Orders', value: '1,293', change: '+24%', icon: <ShoppingBag className="w-6 h-6" /> },
    { label: 'Feedback Items', value: '156', change: '+5%', icon: <MessageSquare className="w-6 h-6" /> }
  ];

  const recentUsers = [
    { id: 1, name: 'John Developer', email: 'john@dev.com', joined: '2024-01-15', status: 'active' },
    { id: 2, name: 'Sarah Wilson', email: 'sarah@design.com', joined: '2024-01-14', status: 'active' },
    { id: 3, name: 'Mike Johnson', email: 'mike@startup.com', joined: '2024-01-13', status: 'inactive' },
    { id: 4, name: 'Lisa Chen', email: 'lisa@tech.com', joined: '2024-01-12', status: 'active' }
  ];

  const recentOrders = [
    { id: 'ORD-001', user: 'John Doe', items: 'HENU OS T-Shirt (L, Black)', total: '$29.99', status: 'shipped', date: '2024-01-15' },
    { id: 'ORD-002', user: 'Jane Smith', items: 'Developer Hoodie (M, Purple)', total: '$59.99', status: 'processing', date: '2024-01-14' },
    { id: 'ORD-003', user: 'Bob Wilson', items: 'Sticker Pack + Mug', total: '$29.98', status: 'completed', date: '2024-01-13' },
    { id: 'ORD-004', user: 'Alice Brown', items: 'Programmer Cap (Navy)', total: '$24.99', status: 'pending', date: '2024-01-12' }
  ];

  const blogPosts = [
    { id: 1, title: 'HENU OS 2.0 Release Notes', author: 'HENU Team', status: 'published', date: '2024-01-15', views: 2847 },
    { id: 2, title: 'Voice Commands Tutorial', author: 'Dev Community', status: 'draft', date: '2024-01-14', views: 0 },
    { id: 3, title: 'Multi-Language Support Guide', author: 'Community', status: 'published', date: '2024-01-13', views: 1923 },
    { id: 4, title: 'Performance Improvements', author: 'Tech Team', status: 'review', date: '2024-01-12', views: 0 }
  ];

  const feedbackItems = [
    { id: 1, user: 'developer@email.com', type: 'bug', subject: 'Voice recognition not working', status: 'open', date: '2024-01-15' },
    { id: 2, user: 'user@domain.com', type: 'suggestion', subject: 'Add more voice commands', status: 'in-progress', date: '2024-01-14' },
    { id: 3, user: 'tester@test.com', type: 'query', subject: 'Installation help needed', status: 'closed', date: '2024-01-13' },
    { id: 4, user: 'feedback@user.com', type: 'bug', subject: 'Boot loader issue', status: 'open', date: '2024-01-12' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': case 'published': case 'shipped': case 'completed': case 'closed':
        return 'bg-green-500/20 text-green-400';
      case 'processing': case 'in-progress': case 'draft': case 'review':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'inactive': case 'pending': case 'open':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dashboardStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-purple-400/30"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-purple-400">
                      {stat.icon}
                    </div>
                    <span className="text-green-400 text-sm font-semibold">
                      {stat.change}
                    </span>
                  </div>
                  <div className="text-3xl font-heading font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 font-body text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-purple-400/30">
                <h3 className="text-xl font-heading font-semibold text-white mb-6">
                  Recent Users
                </h3>
                <div className="space-y-4">
                  {recentUsers.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-xl">
                      <div>
                        <p className="text-white font-body font-semibold">{user.name}</p>
                        <p className="text-gray-400 text-sm">{user.email}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(user.status)}`}>
                        {user.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-purple-400/30">
                <h3 className="text-xl font-heading font-semibold text-white mb-6">
                  Recent Orders
                </h3>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="p-3 bg-gray-800/30 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-purple-400 font-semibold text-sm">{order.id}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </div>
                      <p className="text-white font-body text-sm">{order.user}</p>
                      <p className="text-gray-400 text-xs">{order.items}</p>
                      <p className="text-green-400 font-semibold text-sm">{order.total}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'users':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-heading font-bold text-white">User Management</h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold flex items-center space-x-2"
              >
                <Plus size={16} />
                <span>Add User</span>
              </motion.button>
            </div>

            <div className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-purple-400/30">
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                  />
                </div>
                <button className="px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                  <Filter size={16} />
                  <span>Filter</span>
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-gray-400 text-sm">
                      <th className="text-left pb-4">User</th>
                      <th className="text-left pb-4">Email</th>
                      <th className="text-left pb-4">Joined</th>
                      <th className="text-left pb-4">Status</th>
                      <th className="text-right pb-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-2">
                    {recentUsers.map((user) => (
                      <tr key={user.id} className="border-t border-gray-700">
                        <td className="py-4 text-white font-body">{user.name}</td>
                        <td className="py-4 text-gray-300">{user.email}</td>
                        <td className="py-4 text-gray-300">{user.joined}</td>
                        <td className="py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(user.status)}`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="py-4">
                          <div className="flex items-center justify-end space-x-2">
                            <button className="p-2 text-gray-400 hover:text-purple-400 transition-colors duration-200">
                              <Eye size={16} />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-blue-400 transition-colors duration-200">
                              <Edit size={16} />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-red-400 transition-colors duration-200">
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'blog':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-heading font-bold text-white">Blog Management</h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold flex items-center space-x-2"
              >
                <Plus size={16} />
                <span>New Post</span>
              </motion.button>
            </div>

            <div className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-purple-400/30">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-gray-400 text-sm">
                      <th className="text-left pb-4">Title</th>
                      <th className="text-left pb-4">Author</th>
                      <th className="text-left pb-4">Status</th>
                      <th className="text-left pb-4">Views</th>
                      <th className="text-left pb-4">Date</th>
                      <th className="text-right pb-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blogPosts.map((post) => (
                      <tr key={post.id} className="border-t border-gray-700">
                        <td className="py-4 text-white font-body">{post.title}</td>
                        <td className="py-4 text-gray-300">{post.author}</td>
                        <td className="py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(post.status)}`}>
                            {post.status}
                          </span>
                        </td>
                        <td className="py-4 text-gray-300">{post.views}</td>
                        <td className="py-4 text-gray-300">{post.date}</td>
                        <td className="py-4">
                          <div className="flex items-center justify-end space-x-2">
                            <button className="p-2 text-gray-400 hover:text-purple-400 transition-colors duration-200">
                              <Eye size={16} />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-blue-400 transition-colors duration-200">
                              <Edit size={16} />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-red-400 transition-colors duration-200">
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-16">
            <p className="text-2xl text-gray-400 font-body">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} management coming soon...
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            Admin Panel
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-body leading-relaxed">
            Manage users, store orders, blog posts, and community feedback from this central dashboard.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-80 flex-shrink-0"
          >
            <div className="sticky top-32">
              <div className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-purple-400/30">
                <nav className="space-y-2">
                  {adminTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                          : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                      }`}
                    >
                      <div className={`${activeTab === tab.id ? 'text-white' : 'text-purple-400'}`}>
                        {tab.icon}
                      </div>
                      <span className="font-body font-medium">{tab.name}</span>
                    </button>
                  ))}
                </nav>

                {/* Admin Info */}
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">A</span>
                    </div>
                    <div>
                      <p className="text-white font-body font-semibold">Admin User</p>
                      <p className="text-gray-400 text-sm">admin@henu-os.org</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1"
          >
            {renderContent()}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Admin;