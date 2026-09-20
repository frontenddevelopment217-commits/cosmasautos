# TODO: Framework-agnostic ProductCard image rendering

- [ ] Step 2: Refactor `packages/ui` image rendering to use an injectable renderer API.
- [ ] Step 3: Ensure `packages/ui` never imports `next/image`.
- [ ] Step 4: In `apps/web`, wire `VehicleImage` as the injected renderer.
- [ ] Step 5: Update homepage usages of `ProductCard` to pass the injected renderer.
- [ ] Step 6: Verify Featured Vehicles / Inventory Preview / Latest Vehicles / Related Vehicles use `VehicleImage`.
- [ ] Step 7: Confirm fallback still works using `/images/placeholders/car-placeholder.png`.
- [ ] Step 8: Run `pnpm lint`, `pnpm typecheck`, `pnpm build` and fix any issues.
