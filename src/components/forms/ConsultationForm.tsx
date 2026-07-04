import { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import { COLORS, FONT_SERIF, PROPERTY_TYPES, BUDGET_OPTIONS } from '../../utils/constants';
import type { ConsultationFormData } from '../../types';
import { FormField, StyledInput, StyledSelect } from './FormField';
import PropertyTypeSelector from './PropertyTypeSelector';
import CountryCodeSelect from './CountryCodeSelect';
import FormSuccess from './FormSuccess';


const INITIAL_FORM_STATE: ConsultationFormData = {
  name: '',
  phone: '',
  countryCode: '+91',
  email: '',
  budget: '',
  propertyTypes: [],
};

/**
 * Full consultation booking form with controlled inputs, multi-select property types,
 * basic validation, Supabase persistence, and an animated success state post-submission.
 */
export default function ConsultationForm() {
  const [formData, setFormData] = useState<ConsultationFormData>(INITIAL_FORM_STATE);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  /** Update a single string field in the form state */
  const handleFieldChange = (field: keyof ConsultationFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  /** Replace the propertyTypes array from the selector component */
  const handlePropertyTypesChange = (types: string[]) => {
    setFormData((prev) => ({ ...prev, propertyTypes: types }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setErrorMessage(null);

  // Guard: name, phone, and at least one property type are required
  if (!formData.name || !formData.phone || formData.propertyTypes.length === 0) return;

  setIsSubmitting(true);

  const { supabase } = await import('../../lib/supabaseClient');

  const { error } = await supabase.from('consultations').insert({
    name: formData.name,
    phone: formData.phone,
    country_code: formData.countryCode,
    email: formData.email,
    budget: formData.budget,
    interested: formData.propertyTypes,
  });

  setIsSubmitting(false);

  if (error) {
    console.error('Error saving consultation:', error);
    setErrorMessage("Something went wrong submitting your request. Please try again.");
    return;
  }

  setSubmitted(true);
};

  if (submitted) {
    // Extract first name for the personalised thank-you message
    const firstName = formData.name.split(' ')[0];
    return <FormSuccess firstName={firstName} />;
  }

  return (
    <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
      <FormField label="Full Name" required>
        <StyledInput
          type="text"
          required
          placeholder="Rajiv Mehta"
          value={formData.name}
          onChange={(e) => handleFieldChange('name', e.target.value)}
        />
      </FormField>

      <FormField label="Phone Number" required>
        <div className="flex gap-2">
          <CountryCodeSelect
            value={formData.countryCode}
            onChange={(code) => handleFieldChange('countryCode', code)}
          />
          <StyledInput
            type="tel"
            required
            placeholder="98765 43210"
            value={formData.phone}
            onChange={(e) => handleFieldChange('phone', e.target.value)}
            className="flex-1"
          />
        </div>
      </FormField>

      <FormField label="Email Address" showOptional>
        <StyledInput
          type="email"
          placeholder="rajiv@example.com"
          value={formData.email}
          onChange={(e) => handleFieldChange('email', e.target.value)}
        />
      </FormField>

      <FormField label="Investment Budget" showOptional>
        <StyledSelect
          value={formData.budget}
          hasValue={Boolean(formData.budget)}
          onChange={(e) => handleFieldChange('budget', e.target.value)}
        >
          <option value="">Select budget range</option>
          {BUDGET_OPTIONS.map((option) => (
            <option key={option} value={option} style={{ color: COLORS.navy }}>
              {option}
            </option>
          ))}
        </StyledSelect>
      </FormField>

      <FormField label="Interested In" required>
        <PropertyTypeSelector
          options={PROPERTY_TYPES}
          selected={formData.propertyTypes}
          onChange={handlePropertyTypesChange}
        />
      </FormField>

      {errorMessage && (
        <p className="text-center text-xs font-medium" style={{ color: '#C0392B' }}>
          {errorMessage}
        </p>
      )}

      {/* Primary CTA */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full font-bold py-4 rounded-xl text-sm tracking-wide text-white flex items-center justify-center gap-2 mt-2 transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0"
        style={{
          background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldDark})`,
          boxShadow: `0 6px 24px ${COLORS.gold}44`,
        }}
      >
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            Book Free Consultation
            <ArrowRight size={16} />
          </>
        )}
      </button>

      <p className="text-center text-xs" style={{ color: `${COLORS.navy}44` }}>
        No commitment. No spam. Your privacy is protected.
      </p>
    </form>
  );
}