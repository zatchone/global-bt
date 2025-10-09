"use client";

import React from "react";

export default function ErrorDebugPage() {
  const [logs, setLogs] = React.useState<any[]>([]);

  React.useEffect(() => {
    try {
      const raw = localStorage.getItem("bt_error_log");
      if (raw) setLogs(JSON.parse(raw));
    } catch (e) {
      console.error("Failed to load logs", e);
    }
  }, []);

  return (
    <div className="p-6 bg-black text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">BlockTrace Client Error Logs</h1>
      <p className="mb-4">Showing the last {logs.length} captured events from localStorage key <code>bt_error_log</code>.</p>
      <div className="space-y-4">
        {logs.map((l, idx) => (
          <div key={idx} className="p-4 bg-gray-800 rounded">
            <div className="text-sm text-gray-300">{new Date(l.ts).toLocaleString()}</div>
            <pre className="text-xs mt-2 whitespace-pre-wrap">{JSON.stringify(l.payload, null, 2)}</pre>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <button
          className="px-4 py-2 bg-red-600 rounded"
          onClick={() => { localStorage.removeItem("bt_error_log"); setLogs([]); }}
        >Clear Logs</button>
      </div>
    </div>
  );
}
