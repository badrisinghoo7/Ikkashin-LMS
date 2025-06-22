import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Home, FileText, List, LogOut, LogIn } from "lucide-react";
import AssignmentSubmissionForm from "../pages/SubmissionForm";
import SubmissionCard from "./SubmissionCard"; // Adjust path if needed

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Home");
  const [submissions, setSubmissions] = useState([]);
  const [subLoading, setSubLoading] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const menuItems = [
    { name: "Home", icon: <Home size={20} />, color: "" },
    {
      name: "Submit Assignment",
      icon: <FileText size={20} />,
      color: "",
    },
    {
      name: "Show Submission",
      icon: <List size={20} />,
      color: "",
    },
    !token
      ? { name: "Login", icon: <LogIn size={20} />, color: "" }
      : null,
  ].filter(Boolean);

  useEffect(() => {
    if (activeItem === "Show Submission") {
      setSubLoading(true);
      fetch("http://localhost:5000/api/submissions/all")
        .then((res) => res.json())
        .then((data) => setSubmissions(Array.isArray(data) ? data : []))
        .catch(() => setSubmissions([]))
        .finally(() => setSubLoading(false));
    }
  }, [activeItem]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-white">
      {/* Navbar */}
      <nav className="w-full bg-white border-b border-blue-200 shadow relative z-20">
        <div className="flex items-center justify-between px-8 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shadow">
              <span className="text-blue-600 font-bold text-lg">
                <Home size={28} />
              </span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-blue-700">Ikkashin Learning</h2>
              
            </div>
          </div>
          {/* Menu Items */}
          <ul className="flex space-x-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => {
                    if (item.name === "Login") {
                      navigate("/login");
                    } else {
                      setActiveItem(item.name);
                    }
                  }}
                  className={`group flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                    activeItem === item.name
                      ? "bg-blue-600 text-white shadow"
                      : "bg-blue-50 hover:bg-blue-100 text-blue-700"
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-semibold text-lg">{item.name}</span>
                  {activeItem === item.name && (
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse ml-2"></span>
                  )}
                </button>
              </li>
            ))}
            {token && (
              <li>
                <button
                  onClick={handleLogout}
                  className="group flex items-center space-x-2 px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-700 text-white font-semibold shadow transition-all duration-300"
                >
                  <LogOut size={20} />
                  <span className="font-semibold text-lg">Logout</span>
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 p-8 max-w-4xl mx-auto">
        <div className="mb-8 mt-8">
          <h1 className="text-4xl font-bold text-blue-700 mb-2">
            {activeItem}
          </h1>
          <div className="h-1 w-20 bg-blue-400 rounded-full"></div>
        </div>

        <div className="bg-white rounded-3xl border border-blue-100 shadow overflow-hidden">
          <div className="p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center shadow">
                <span className="text-2xl text-blue-600">
                  {
                    menuItems.find((item) => item.name === activeItem)
                      ?.icon
                  }
                </span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-blue-700 mb-1">
                  Welcome to {activeItem}
                </h2>
                <p className="text-blue-400">
                  Click different menu items to explore the interface
                </p>
              </div>
            </div>

            {activeItem === "Home" && (
              <div className="text-blue-700 mt-4 space-y-4 leading-relaxed">
                <p>
                  Welcome to the{" "}
                  <span className="font-semibold text-blue-900">
                    Student LMS
                  </span>{" "}
                  – a modern Learning Management System designed to help
                  students manage assignments, view submissions, and stay
                  organized.
                </p>
                <p>With this dashboard, you can easily:</p>
                <ul className="list-disc list-inside ml-4">
                  <li>Submit assignments on time</li>
                  <li>Track your submissions</li>
                  <li>Access your academic resources</li>
                  <li>Stay updated with announcements</li>
                </ul>
                <p>
                  Click on the menu items to explore different features of
                  the portal.
                </p>
              </div>
            )}
            {activeItem === "Submit Assignment" && (
              <AssignmentSubmissionForm />
            )}
            {activeItem === "Show Submission" && (
              <div>
                <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">All Submissions</h2>
                {subLoading ? (
                  <div className="flex justify-center items-center py-12">
                    <svg className="animate-spin h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                    </svg>
                  </div>
                ) : submissions.length === 0 ? (
                  <div className="text-center text-blue-400">No submissions found.</div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {submissions.map((submission) => (
                      <SubmissionCard
                        key={submission._id}
                        submission={{
                          ...submission,
                          attachmentUrl: submission.attachment // adjust if needed
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
}
