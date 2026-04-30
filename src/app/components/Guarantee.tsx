import { Shield, Heart, FileCheck, Headphones, Award, Stethoscope } from 'lucide-react';

const guarantees = [
  {
    icon: Shield,
    title: 'Garantía de Salud 100%',
    description: 'Todos nuestros cachorros vienen con certificado veterinario y garantía de salud genética.',
  },
  {
    icon: FileCheck,
    title: 'Contrato Legal',
    description: 'Documentación completa y contrato de compra-venta para tu total seguridad.',
  },
  {
    icon: Stethoscope,
    title: 'Revisión Veterinaria',
    description: 'Cada cachorro es examinado por veterinarios certificados antes de entregarse.',
  },
  {
    icon: Headphones,
    title: 'Soporte 24/7',
    description: 'Asesoría continua post-venta. Estamos contigo en cada paso del crecimiento de tu frenchie.',
  },
  {
    icon: Heart,
    title: 'Crianza Responsable',
    description: 'Ambiente familiar, ético y profesional. Sin maltrato, con amor y dedicación total.',
  },
  {
    icon: Award,
    title: '27 Años de Respaldo',
    description: 'Desde 1999 criando bulldogs de élite. Nuestra trayectoria nos avala.',
  },
];

export function Guarantee() {
  return (
    <section className="py-24 bg-neutral-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#0d7a3a] blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#DC2626] blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-[#0d7a3a] rounded-lg px-6 py-2 mb-6">
            <span className="text-white font-bold text-sm tracking-widest uppercase">Garantías</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase">
            Compromiso<br/>
            <span className="text-[#0d7a3a]">Total</span>
          </h2>
          
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-medium">
            Respaldo completo en cada paso
          </p>
        </div>

        {/* Guarantees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon;
            return (
              <div 
                key={index}
                className="group bg-slate-900/50 backdrop-blur-sm border-2 border-neutral-800 hover:border-[#0d7a3a] rounded-2xl p-8 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-[#0d7a3a] group-hover:bg-[#DC2626] rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors">
                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-black text-white mb-3 uppercase group-hover:text-[#0d7a3a] transition-colors">
                      {guarantee.title}
                    </h3>
                    <p className="text-white/60 font-medium leading-relaxed text-sm">
                      {guarantee.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
    </div>
  </section>
);
}