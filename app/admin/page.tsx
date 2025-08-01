"use client";

import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Package, Wrench, Target, Image, TrendingUp } from 'lucide-react';

interface Stats {
  products: number;
  services: number;
  applications: number;
  gallery: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    products: 0,
    services: 0,
    applications: 0,
    gallery: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [
        { count: productsCount },
        { count: servicesCount },
        { count: applicationsCount },
        { count: galleryCount },
      ] = await Promise.all([
        supabase.from('products').select('*', { count: 'exact', head: true }),
        supabase.from('services').select('*', { count: 'exact', head: true }),
        supabase.from('applications').select('*', { count: 'exact', head: true }),
        supabase.from('gallery_images').select('*', { count: 'exact', head: true }),
      ]);

      setStats({
        products: productsCount || 0,
        services: servicesCount || 0,
        applications: applicationsCount || 0,
        gallery: galleryCount || 0,
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      name: 'المنتجات',
      value: stats.products,
      icon: Package,
      color: 'bg-blue-500',
      href: '/admin/products',
    },
    {
      name: 'الخدمات',
      value: stats.services,
      icon: Wrench,
      color: 'bg-green-500',
      href: '/admin/services',
    },
    {
      name: 'التطبيقات',
      value: stats.applications,
      icon: Target,
      color: 'bg-purple-500',
      href: '/admin/applications',
    },
    {
      name: 'معرض الصور',
      value: stats.gallery,
      icon: Image,
      color: 'bg-pink-500',
      href: '/admin/gallery',
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-600"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">لوحة التحكم</h1>
        <p className="mt-2 text-gray-600">مرحباً بك في لوحة إدارة موقع DiveMix</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
        {statCards.map((card) => (
          <div
            key={card.name}
            className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className={`${card.color} rounded-md p-3`}>
                    <card.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {card.name}
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {card.value}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3">
              <div className="text-sm">
                <a
                  href={card.href}
                  className="font-medium text-cyan-700 hover:text-cyan-900 transition-colors"
                >
                  عرض الكل
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">الإحصائيات السريعة</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">إجمالي المحتوى</span>
              <span className="text-lg font-semibold text-gray-900">
                {stats.products + stats.services + stats.applications + stats.gallery}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">المنتجات النشطة</span>
              <span className="text-lg font-semibold text-green-600">{stats.products}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">آخر تحديث</span>
              <span className="text-sm text-gray-500">اليوم</span>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">الإجراءات السريعة</h2>
          <div className="space-y-3">
            <a
              href="/admin/products/new"
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            >
              إضافة منتج جديد
            </a>
            <a
              href="/admin/services/new"
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            >
              إضافة خدمة جديدة
            </a>
            <a
              href="/admin/gallery/new"
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            >
              إضافة صورة للمعرض
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}