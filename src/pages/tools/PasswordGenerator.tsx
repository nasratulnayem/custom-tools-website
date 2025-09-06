import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Copy, Shield, RefreshCw } from 'lucide-react';

const PasswordGenerator = () => {
  const [length, setLength] = useState([12]);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    let charset = '';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let result = '';
    for (let i = 0; i < length[0]; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(result);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-5xl font-bold gradient-text mb-4">Password Generator</h1>
          <p className="text-xl text-muted-foreground">Create strong, secure passwords with custom options</p>
        </div>

        <Card className="glass-card mb-8 animate-scale-in">
          <CardHeader className="text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-glow mx-auto mb-4 flex items-center justify-center">
              <Shield className="w-10 h-10 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">Generate Secure Password</CardTitle>
            <CardDescription>
              Customize your password settings and generate strong passwords
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {password && (
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg font-mono text-lg break-all">
                  {password}
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={copyPassword}
                    variant="outline"
                    className="flex-1"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Password
                  </Button>
                  <Button
                    onClick={generatePassword}
                    variant="outline"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Password Length: {length[0]}
                </label>
                <Slider
                  value={length}
                  onValueChange={setLength}
                  max={50}
                  min={4}
                  step={1}
                  className="w-full"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="uppercase"
                    checked={includeUppercase}
                    onCheckedChange={(checked) => setIncludeUppercase(checked === true)}
                  />
                  <label htmlFor="uppercase" className="text-sm font-medium">
                    Include Uppercase Letters (A-Z)
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="lowercase"
                    checked={includeLowercase}
                    onCheckedChange={(checked) => setIncludeLowercase(checked === true)}
                  />
                  <label htmlFor="lowercase" className="text-sm font-medium">
                    Include Lowercase Letters (a-z)
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="numbers"
                    checked={includeNumbers}
                    onCheckedChange={(checked) => setIncludeNumbers(checked === true)}
                  />
                  <label htmlFor="numbers" className="text-sm font-medium">
                    Include Numbers (0-9)
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="symbols"
                    checked={includeSymbols}
                    onCheckedChange={(checked) => setIncludeSymbols(checked === true)}
                  />
                  <label htmlFor="symbols" className="text-sm font-medium">
                    Include Symbols (!@#$%^&*)
                  </label>
                </div>
              </div>

              <Button
                onClick={generatePassword}
                className="w-full btn-futuristic bg-gradient-to-r from-primary to-primary-glow"
              >
                <Shield className="w-4 h-4 mr-2" />
                Generate Password
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="glass-card">
            <CardHeader>
              <Shield className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Secure Generation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Uses cryptographically secure random number generation</p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <RefreshCw className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Customizable</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Choose length and character types for your needs</p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <Copy className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Easy Copy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">One-click copy to clipboard for immediate use</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;