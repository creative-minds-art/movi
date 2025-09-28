'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signUp } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import Image from 'next/image';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('register');
  const [isStudentMode, setIsStudentMode] = useState(true); // Default to student registration
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!email.endsWith('.edu.co')) {
      setError('Solo se permiten correos institucionales (.edu.co)');
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      setIsLoading(false);
      return;
    }

    const { success, error } = await signUp({ email, password });

    if (success) {
      router.push('/login');
    } else {
      setError(error || 'Ocurrió un error inesperado');
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-background flex flex-col text-foreground">
      {/* Header with back button */}
      <div className="flex items-center justify-between p-4">
        <button
          onClick={() => router.push('/')}
          className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          <ArrowLeft size={20} />
        </button>
      </div>

      {/* Image section*/}
      <div className="relative w-full h-full flex justify-center items-center">
        <Image
          src={'/auth/logo.png'}
          alt="Vehicle registration"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center px-6 pb-12">
        {/* Hero section */}
        <div className="text-left mb-8 max-w-md">
          <h1 className="text-2xl font-medium text-foreground mb-4 text-center">
            Crea tu cuenta
          </h1>
        </div>

        {/* Form container */}
        <div className="w-full max-w-sm">
          {/* Tab navigation */}
          <div className="flex mb-6">
            <button
              onClick={() => {
                setActiveTab('login');
                router.push('/login');
              }}
              className={`flex-1 pb-2 text-sm font-medium transition-all duration-300 border-b-2 ${
                activeTab === 'login'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              Iniciar sesión
            </button>
            <button
              onClick={() => setActiveTab('register')}
              className={`flex-1 pb-2 text-sm font-medium transition-all duration-300 border-b-2 ${
                activeTab === 'register'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              Registrarse
            </button>
          </div>

          {/* Register form */}
          <form onSubmit={handleSignUp} className="space-y-4">
            {/* Email field */}
            <div className="relative">
              <Input
                id="email"
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-14"
              />
            </div>

            {/* Password field */}
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="pr-12 h-14"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Confirm Password field */}
            <div className="relative">
              <Input
                id="confirm-password"
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirmar contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="pr-12 h-14"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Driver/Student Toggle */}
            <div className="flex items-center space-x-2">
              <Switch
                id="driver-mode"
                checked={!isStudentMode}
                onCheckedChange={(checked) => setIsStudentMode(!checked)}
              />
              <Label htmlFor="driver-mode">Soy conductor</Label>
            </div>

            {/* Error message */}
            {error && (
              <div className="bg-destructive/10 border border-destructive rounded-md p-3">
                <p className="text-destructive text-sm text-center">{error}</p>
              </div>
            )}

            {/* Submit button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-14 font-medium rounded-md transition-all duration-300 transform disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin"></div>
                  <span>Creando cuenta...</span>
                </div>
              ) : isStudentMode ? (
                'Crear cuenta de estudiante'
              ) : (
                'Crear cuenta de conductor'
              )}
            </Button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-xs">
              Al continuar, aceptas nuestros{' '}
              <button className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                Términos de Servicio
              </button>{' '}
              y{' '}
              <button className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                Política de Privacidad
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
