import { useEffect } from 'react';
import { ArrowUpRight, Github, X } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="modal-card"
        data-lenis-prevent
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close"
          aria-label="Tutup detail proyek"
          onClick={onClose}
        >
          <X size={18} strokeWidth={1.5} />
        </button>

        <div className="modal-media">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="modal-body">
          <div>
            <div className="modal-meta">
              <span>{project.code}</span>
              <span>•</span>
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>

            <h3 id="project-modal-title" className="modal-title">
              {project.title}
            </h3>

            <p className="modal-summary">{project.summary}</p>

            {project.highlightsTitle && (
              <p className="modal-highlights-title">{project.highlightsTitle}</p>
            )}

            <ul className="modal-highlights">
              {project.highlights.map((point, idx) => {
                const [pageName, ...descParts] = point.split(' — ');
                return (
                  <li key={idx}>
                    {descParts.length > 0 ? (
                      <>
                        <strong>{pageName}</strong> — {descParts.join(' — ')}
                      </>
                    ) : (
                      point
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="modal-tags">
              {project.techStack.map((tech) => (
                <span key={tech} className="modal-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="modal-actions">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="modal-btn modal-btn--primary"
              >
                <Github size={15} />
                <span>Repository</span>
              </a>
            )}
            {project.demoUrl && project.demoUrl !== '#' && (
              <a
                href={project.demoUrl}
                target={project.demoUrl.startsWith('#') ? undefined : '_blank'}
                rel={project.demoUrl.startsWith('#') ? undefined : 'noreferrer'}
                className="modal-btn modal-btn--outline"
                onClick={project.demoUrl.startsWith('#') ? onClose : undefined}
              >
                <span>Live Preview</span>
                <ArrowUpRight size={15} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
