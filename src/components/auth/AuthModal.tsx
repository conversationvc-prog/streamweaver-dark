import { useState } from "react";
import { X, Mail, Lock, User, Eye, EyeOff, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: "signin" | "signup";
}

export const AuthModal = ({ isOpen, onClose, initialTab = "signin" }: AuthModalProps) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: ""
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement with Supabase integration
    console.log("Auth form submitted:", { activeTab, formData });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md">
      <div className="relative w-full max-w-lg mx-4">
        <div className="bg-background/98 backdrop-blur-xl rounded-3xl border border-border/30 shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="relative bg-gradient-to-br from-primary/10 via-purple-500/10 to-blue-500/10 p-8 border-b border-border/20">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-all duration-200 hover:scale-110"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-purple-500 rounded-2xl flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Welcome to WEPLIX
              </h2>
              <p className="text-muted-foreground">Premium streaming experience awaits</p>
              <div className="flex items-center justify-center gap-1 text-sm">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="ml-2 text-muted-foreground">Trusted by millions</span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-border/20 bg-muted/30">
            <button
              onClick={() => setActiveTab("signin")}
              className={`flex-1 py-4 px-6 text-sm font-semibold transition-all duration-200 relative ${
                activeTab === "signin"
                  ? "text-primary bg-background border-b-2 border-primary shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/50"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setActiveTab("signup")}
              className={`flex-1 py-4 px-6 text-sm font-semibold transition-all duration-200 relative ${
                activeTab === "signup"
                  ? "text-primary bg-background border-b-2 border-primary shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/50"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {activeTab === "signup" && (
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="pl-12 pr-4 py-3 bg-background/70 border-border/30 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>
            )}

            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="pl-12 pr-4 py-3 bg-background/70 border-border/30 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  className="pl-12 pr-12 py-3 bg-background/70 border-border/30 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {activeTab === "signup" && (
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                    className="pl-12 pr-4 py-3 bg-background/70 border-border/30 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-primary via-purple-500 to-blue-500 hover:from-primary/90 hover:via-purple-500/90 hover:to-blue-500/90 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              {activeTab === "signin" ? "Sign In to WEPLIX" : "Create WEPLIX Account"}
            </Button>

            <Separator className="my-6" />

            <div className="space-y-4">
              <div className="text-center text-sm text-muted-foreground">
                {activeTab === "signin" ? (
                  <p>
                    New to WEPLIX?{" "}
                    <button
                      type="button"
                      onClick={() => setActiveTab("signup")}
                      className="text-primary hover:text-primary/80 font-semibold hover:underline transition-colors"
                    >
                      Create free account
                    </button>
                  </p>
                ) : (
                  <p>
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setActiveTab("signin")}
                      className="text-primary hover:text-primary/80 font-semibold hover:underline transition-colors"
                    >
                      Sign in here
                    </button>
                  </p>
                )}
              </div>
              
              <p className="text-xs text-center text-muted-foreground px-4">
                By continuing, you agree to our Terms of Service and Privacy Policy. 
                Your data is protected with enterprise-grade security.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};