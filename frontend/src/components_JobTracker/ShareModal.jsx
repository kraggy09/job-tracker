import React, { useState } from "react";

const ShareModal = ({ isOpen, onClose }) => {
  const [shareUrl] = useState(
    "https://yourdashboard.com/jobs/dashboard/af4klrhu4"
  );
  const [viewOnly, setViewOnly] = useState(true);
  const [requireLogin, setRequireLogin] = useState(false);
  const [disableDownload, setDisableDownload] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");

  if (!isOpen) return null;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopyStatus("Link copied to clipboard!");
      setTimeout(() => setCopyStatus(""), 3000);
    } catch (error) {
      console.error("Failed to copy link:", error);
      setCopyStatus("Failed to copy link.");
    }
  };

  const handleShareLink = () => {
    console.log("Sharing link with settings:", {
      viewOnly,
      requireLogin,
      disableDownload,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md mx-4 relative">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Share Dashboard
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <p className="text-gray-600 mb-6">
            Share a view-only link to your job application dashboard
          </p>

          <div className="flex mb-6">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </div>
              <input
                type="text"
                value={shareUrl}
                readOnly
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-l-lg bg-gray-50 text-gray-700 text-sm focus:outline-none"
              />
            </div>
            <button
              onClick={handleCopyLink}
              className="bg-black text-white px-4 py-3 rounded-r-lg hover:bg-gray-800 transition-colors flex items-center"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>

          {copyStatus && (
            <p
              className={`mb-4 text-sm ${
                copyStatus.includes("Failed")
                  ? "text-red-600"
                  : "text-green-600"
              }`}
            >
              {copyStatus}
            </p>
          )}

          <div className="space-y-4 mb-8">
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={viewOnly}
                  onChange={(e) => setViewOnly(e.target.checked)}
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                    viewOnly
                      ? "bg-black border-black"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {viewOnly && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
              </div>
              <span className="ml-3 text-gray-700">
                View only (recipients can't edit)
              </span>
            </label>

            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={requireLogin}
                  onChange={(e) => setRequireLogin(e.target.checked)}
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                    requireLogin
                      ? "bg-black border-black"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {requireLogin && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
              </div>
              <span className="ml-3 text-gray-700">
                Require recipients to login
              </span>
            </label>

            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={disableDownload}
                  onChange={(e) => setDisableDownload(e.target.checked)}
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                    disableDownload
                      ? "bg-black border-black"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {disableDownload && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
              </div>
              <span className="ml-3 text-gray-700">
                Disable downloading of dashboard data
              </span>
            </label>
          </div>

          <div className="flex justify-between">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleShareLink}
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              Share Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
