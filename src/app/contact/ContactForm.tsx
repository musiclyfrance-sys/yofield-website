'use client'

import { useState } from 'react'

const inputClass =
  'border border-soil/20 rounded-xl px-4 py-3 font-body text-sm text-soil bg-snow focus:outline-none focus:ring-2 focus:ring-citron focus:border-transparent w-full transition-all'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
    }, 1200)
  }

  if (status === 'success') {
    return (
      <div className="flex items-center justify-center min-h-[400px] rounded-2xl bg-mist p-10 text-center">
        <div>
          <span className="block np-700 text-2xl text-soil mb-4">
            Message envoyé.
          </span>
          <p className="font-body text-sm text-soil/65 leading-relaxed max-w-sm mx-auto">
            Votre message a bien été envoyé. On vous répond dans les 48 heures.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label className="font-body text-xs text-soil/50 mb-1.5 block" htmlFor="name">
          Prénom et nom <span className="text-soil/30">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Marie Dupont"
          className={inputClass}
        />
      </div>

      <div>
        <label className="font-body text-xs text-soil/50 mb-1.5 block" htmlFor="email">
          Email <span className="text-soil/50">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="marie@exemple.fr"
          className={inputClass}
        />
      </div>

      <div>
        <label className="font-body text-xs text-soil/50 mb-1.5 block" htmlFor="company">
          Votre entreprise
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={form.company}
          onChange={handleChange}
          placeholder="Nom de votre entreprise"
          className={inputClass}
        />
      </div>

      <div>
        <label className="font-body text-xs text-soil/50 mb-1.5 block" htmlFor="project">
          Votre projet <span className="text-soil/30">*</span>
        </label>
        <textarea
          id="project"
          name="project"
          required
          rows={5}
          value={form.project}
          onChange={handleChange}
          placeholder="Décrivez votre projet en quelques phrases : ce que vous faites, ce que vous voulez construire, les contraintes de délai si vous en avez."
          className={`${inputClass} resize-none`}
        />
      </div>

      <div>
        <label className="font-body text-xs text-soil/50 mb-1.5 block" htmlFor="budget">
          Budget estimé
        </label>
        <select
          id="budget"
          name="budget"
          value={form.budget}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Sélectionner une fourchette</option>
          <option value="lt5k">Moins de 5 000 €</option>
          <option value="5k-15k">5 000 à 15 000 €</option>
          <option value="15k-30k">15 000 à 30 000 €</option>
          <option value="gt30k">Plus de 30 000 €</option>
          <option value="unknown">Je ne sais pas encore</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn btn-citron w-full justify-center mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Envoi en cours...' : 'Envoyer le message'}
      </button>
    </form>
  )
}
