# 🚀 Guía de Despliegue - FARECOH Website

## Despliegue en Vercel (Recomendado)

### Opción 1: Despliegue desde GitHub

1. **Subir el proyecto a GitHub:**
   ```bash
   cd C:\Users\sopor\CascadeProjects\farecoh-website
   git init
   git add .
   git commit -m "Initial commit: FARECOH website"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/farecoh-website.git
   git push -u origin main
   ```

2. **Conectar con Vercel:**
   - Ir a [vercel.com](https://vercel.com)
   - Hacer clic en "New Project"
   - Importar desde GitHub
   - Seleccionar el repositorio `farecoh-website`
   - Vercel detectará automáticamente que es un proyecto Astro
   - Hacer clic en "Deploy"

### Opción 2: Despliegue con Vercel CLI

1. **Instalar Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Desplegar:**
   ```bash
   cd C:\Users\sopor\CascadeProjects\farecoh-website
   vercel
   ```

3. **Seguir las instrucciones:**
   - Confirmar el directorio del proyecto
   - Seleccionar "No" para vincular a proyecto existente
   - Ingresar nombre del proyecto: `farecoh-honduras`
   - Confirmar configuración

## Despliegue en Netlify (Alternativa)

### Opción 1: Drag & Drop

1. **Construir el proyecto:**
   ```bash
   npm run build
   ```

2. **Ir a Netlify:**
   - Visitar [netlify.com](https://netlify.com)
   - Arrastrar la carpeta `dist` al área de despliegue

### Opción 2: Desde GitHub

1. **Subir a GitHub** (mismo proceso que Vercel)
2. **Conectar con Netlify:**
   - Ir a Netlify Dashboard
   - "New site from Git"
   - Conectar con GitHub
   - Seleccionar repositorio
   - Configuración automática desde `netlify.toml`

## Comandos de Desarrollo Local

```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de la construcción
npm run preview
```

## Configuración de Dominio Personalizado

### En Vercel:
1. Ir a Project Settings → Domains
2. Agregar dominio personalizado (ej: `www.farecoh.org`)
3. Configurar DNS según las instrucciones

### En Netlify:
1. Ir a Site Settings → Domain management
2. Agregar dominio personalizado
3. Configurar DNS records

## Variables de Entorno (Si se necesitan)

Crear archivo `.env.local` en la raíz del proyecto:
```env
# Ejemplo de variables de entorno
PUBLIC_SITE_URL=https://farecoh-honduras.vercel.app
PUBLIC_CONTACT_EMAIL=info@farecoh.org
```

## Optimizaciones Post-Despliegue

1. **Configurar Analytics:**
   - Google Analytics
   - Vercel Analytics

2. **SEO:**
   - Verificar Google Search Console
   - Configurar sitemap.xml

3. **Performance:**
   - Verificar Core Web Vitals
   - Optimizar imágenes si es necesario

## Mantenimiento

### Actualizar Contenido:
- Editar archivos `.astro` correspondientes
- Hacer commit y push para despliegue automático

### Agregar Nuevos Programas:
- Crear archivo en `src/pages/programas/nuevo-programa.astro`
- Actualizar `src/pages/programas/index.astro`

### Actualizar Eventos:
- Modificar array `upcomingEvents` en `src/pages/eventos.astro`

## Troubleshooting

### Error de Build:
```bash
# Limpiar cache y reinstalar
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Error de Dependencias:
```bash
# Verificar versiones
npm ls
npm audit fix
```

## Contacto de Soporte

Para soporte técnico del sitio web:
- Email: dev@farecoh.org
- Documentación: Este archivo README.md

---

**¡El sitio web de FARECOH está listo para transformar vidas a través de la música! 🎵**
