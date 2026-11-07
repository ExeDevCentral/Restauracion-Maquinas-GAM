# Troubleshooting & Diagnostic Guide — Restauracion-Maquinas-GAM

Standard operational recovery procedures for `Restauracion-Maquinas-GAM`:

- **Build / Cache Mismatch**: Clean build artifacts (`dist/`, `build/`, `.cache/`) and re-run compilation.
- **Dependency Drift**: Verify lockfile consistency and reinstall clean dependency trees.
- **Port / Resource Contention**: Inspect active process bindings and assign alternative execution ports.
