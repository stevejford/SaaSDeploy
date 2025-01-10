import { PageProps } from "$fresh/server.ts";
import CRMLayout from "../components/CRMLayout.tsx";

export default function DashboardPage(props: PageProps) {
  return (
    <CRMLayout>
      <div class="bg-white rounded-lg shadow p-6">
        <h1 class="text-2xl font-bold text-gray-900 mb-4">Dashboard</h1>
        <p class="text-gray-600">Welcome to your service business dashboard!</p>
      </div>
    </CRMLayout>
  );
} 