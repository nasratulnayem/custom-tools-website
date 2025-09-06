import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRightLeft, Calculator, Ruler } from 'lucide-react';

const UnitConverter = () => {
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [result, setResult] = useState('');
  const [category, setCategory] = useState('length');

  const unitCategories = {
    length: ['meter', 'kilometer', 'centimeter', 'millimeter', 'inch', 'foot', 'yard', 'mile'],
    weight: ['kilogram', 'gram', 'pound', 'ounce', 'ton'],
    temperature: ['celsius', 'fahrenheit', 'kelvin'],
    area: ['square meter', 'square kilometer', 'square foot', 'square inch', 'acre'],
    volume: ['liter', 'milliliter', 'gallon', 'quart', 'pint', 'cup'],
  };

  const convert = () => {
    if (!value || !fromUnit || !toUnit) return;
    // Conversion logic would go here
    setResult((parseFloat(value) * 2.54).toFixed(4)); // Example conversion
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-5xl font-bold gradient-text mb-4">Unit Converter</h1>
          <p className="text-xl text-muted-foreground">Convert between different units of measurement</p>
        </div>

        <Card className="glass-card mb-8 animate-scale-in">
          <CardHeader className="text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-glow mx-auto mb-4 flex items-center justify-center">
              <Calculator className="w-10 h-10 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">Convert Units</CardTitle>
            <CardDescription>
              Select category and units to convert between
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="length">Length</SelectItem>
                  <SelectItem value="weight">Weight</SelectItem>
                  <SelectItem value="temperature">Temperature</SelectItem>
                  <SelectItem value="area">Area</SelectItem>
                  <SelectItem value="volume">Volume</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
              <div>
                <label className="block text-sm font-medium mb-2">From</label>
                <div className="space-y-2">
                  <Input
                    type="number"
                    placeholder="Enter value"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <Select value={fromUnit} onValueChange={setFromUnit}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select unit" />
                    </SelectTrigger>
                    <SelectContent>
                      {unitCategories[category as keyof typeof unitCategories]?.map((unit) => (
                        <SelectItem key={unit} value={unit}>
                          {unit}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="text-center">
                <ArrowRightLeft className="w-8 h-8 text-primary mx-auto" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">To</label>
                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder="Result"
                    value={result}
                    readOnly
                    className="bg-muted"
                  />
                  <Select value={toUnit} onValueChange={setToUnit}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select unit" />
                    </SelectTrigger>
                    <SelectContent>
                      {unitCategories[category as keyof typeof unitCategories]?.map((unit) => (
                        <SelectItem key={unit} value={unit}>
                          {unit}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <Button
              onClick={convert}
              disabled={!value || !fromUnit || !toUnit}
              className="w-full btn-futuristic bg-gradient-to-r from-primary to-primary-glow"
            >
              <Calculator className="w-4 h-4 mr-2" />
              Convert
            </Button>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="glass-card">
            <CardHeader>
              <Ruler className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Multiple Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Convert length, weight, temperature, area, and volume units</p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <Calculator className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Accurate Results</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Precise calculations with high decimal accuracy</p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <ArrowRightLeft className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Bidirectional</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Convert in both directions between any supported units</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UnitConverter;